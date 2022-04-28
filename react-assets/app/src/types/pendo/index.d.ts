declare namespace pendo {
  interface Identity {
    /** visitor.id is required if user is logged in, otherwise an anonymous ID is generated and tracked by a cookie */
    visitor?: IdentityMetadata;
    account?: IdentityMetadata;
  }

  interface Metadata {
    [key: string]: string | number | boolean;
  }

  type IdentityMetadata = { id?: string } & Metadata;

  interface InitOptions extends Identity {
    apiKey?: string;
    excludeAllText?: boolean;
    excludeTitle?: boolean;
    disablePersistence?: boolean;
    guides?: {
      delay?: boolean;
      disable?: boolean;
      timeout?: number;
      tooltip?: {
        arrowSize?: number;
      };
    };
    events?: EventCallbacks;
  }

  interface EventCallbacks {
    ready?(): void;
    guidesLoaded?(): void;
    guidesFailed?(): void;
  }

  const initialize: (options?: InitOptions) => void;
  const identify: (options: Identity) => void;
}
