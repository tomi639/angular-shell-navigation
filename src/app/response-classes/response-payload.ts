import { AuthorizationData } from "./authorization-data";

export class ResponsePayload {
    authToken!: string;
    cloudHost!: string;
    account!: string;
    accountId!: string;
    company!: string;
    companyId!: string;
    selectedLocale!: string;
    user!: string;
    userId!: string;
    userAccountFeatureFlagsEnabled!: boolean;
    userAccountFeatureFlagsUserId!: string;
    erpType!: string;
    erpUserId!: string;
    auth!: AuthorizationData;
    extension!: {
        deploymentId: string;
    };
}