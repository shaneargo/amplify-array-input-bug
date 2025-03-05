import {defineFunction} from "@aws-amplify/backend";

export const exampleMutation = defineFunction({
    entry: './handlers/resolvers/example-mutation.ts',
})