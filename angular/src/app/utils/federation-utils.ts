import {
    LoadRemoteEntryOptions,
    LoadRemoteEntryScriptOptions,
    LoadRemoteModuleOptions,
    LoadRemoteModuleScriptOptions
} from "@angular-architects/module-federation";

type Scope = unknown;
type Factory = () => any;

type Container = {
    init(shareScope: Scope): void;
    get(module: string): Factory;
};

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: Scope };

const moduleMap: any = {};

function loadRemoteEntryExtend(remoteEntry: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        if (moduleMap[remoteEntry]) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = remoteEntry;

        script.onerror = reject;

        script.onload = () => {
            moduleMap[remoteEntry] = true;
            resolve(); // window is the global namespace
        };

        document.head.append(script);
    });
}

async function lookupExposedModuleExtend<T>(remoteName: string, exposedModule: string): Promise<T> {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__('default');
    // @ts-ignore
    const container = window[remoteName] as Promise<Container>; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    console.log(remoteName);

    // await container.init(__webpack_share_scopes__.default);
    try {
        (await container).init(__webpack_share_scopes__.default)
    } catch (e) {
        // already was initialized
    }
    const factory = (await container).get(exposedModule);

    const Module = () => factory();

    return Module as T;
}

// export type LoadRemoteModuleOptions = {
//   remoteEntry: string;
//   remoteName: string;
//   exposedModule: string;
// };

export async function loadRemoteModuleExtend(options: LoadRemoteEntryOptions | LoadRemoteModuleOptions): Promise<any> {
    await loadRemoteEntryExtend((<LoadRemoteEntryOptions>options)?.remoteEntry);
    return await lookupExposedModuleExtend<any>((<LoadRemoteModuleScriptOptions>options)?.remoteName, (<LoadRemoteModuleScriptOptions>options)?.exposedModule);
}

