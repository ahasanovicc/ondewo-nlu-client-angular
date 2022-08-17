/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './utility.pb';
import { GRPC_UTILITIES_CLIENT_SETTINGS } from './utility.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-grpc/core";
/**
 * Service client implementation for ondewo.nlu.Utilities
 */
export class UtilitiesClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /ondewo.nlu.Utilities/ValidateRegex
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ValidateRegexResponse>>
             */
            validateRegex: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Utilities/ValidateRegex',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ValidateRegexRequest,
                    responseClass: thisProto.ValidateRegexResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.Utilities/ValidateEmbeddedRegex
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ValidateEmbeddedRegexResponse>>
             */
            validateEmbeddedRegex: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Utilities/ValidateEmbeddedRegex',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ValidateEmbeddedRegexRequest,
                    responseClass: thisProto.ValidateEmbeddedRegexResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.Utilities/CleanAllIntents
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.CleanAllIntentsResponse>>
             */
            cleanAllIntents: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Utilities/CleanAllIntents',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CleanAllIntentsRequest,
                    responseClass: thisProto.CleanAllIntentsResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.Utilities/CleanIntent
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.CleanIntentResponse>>
             */
            cleanIntent: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Utilities/CleanIntent',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CleanIntentRequest,
                    responseClass: thisProto.CleanIntentResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.Utilities/CleanAllEntityTypes
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.CleanAllEntityTypesResponse>>
             */
            cleanAllEntityTypes: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Utilities/CleanAllEntityTypes',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CleanAllEntityTypesRequest,
                    responseClass: thisProto.CleanAllEntityTypesResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.Utilities/CleanEntityType
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.CleanEntityTypeResponse>>
             */
            cleanEntityType: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Utilities/CleanEntityType',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CleanEntityTypeRequest,
                    responseClass: thisProto.CleanEntityTypeResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.Utilities/AddTrainingPhrases
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.AddTrainingPhrasesResponse>>
             */
            addTrainingPhrases: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Utilities/AddTrainingPhrases',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.AddTrainingPhrasesRequest,
                    responseClass: thisProto.AddTrainingPhrasesResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.Utilities/AddTrainingPhrasesFromCSV
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.AddTrainingPhrasesResponse>>
             */
            addTrainingPhrasesFromCSV: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Utilities/AddTrainingPhrasesFromCSV',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.AddTrainingPhrasesFromCSVRequest,
                    responseClass: thisProto.AddTrainingPhrasesResponse
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.nlu.Utilities', settings);
    }
    /**
     * Unary call @/ondewo.nlu.Utilities/ValidateRegex
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ValidateRegexResponse>
     */
    validateRegex(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .validateRegex(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.Utilities/ValidateEmbeddedRegex
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ValidateEmbeddedRegexResponse>
     */
    validateEmbeddedRegex(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .validateEmbeddedRegex(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.Utilities/CleanAllIntents
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CleanAllIntentsResponse>
     */
    cleanAllIntents(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .cleanAllIntents(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.Utilities/CleanIntent
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CleanIntentResponse>
     */
    cleanIntent(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .cleanIntent(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.Utilities/CleanAllEntityTypes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CleanAllEntityTypesResponse>
     */
    cleanAllEntityTypes(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .cleanAllEntityTypes(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.Utilities/CleanEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.CleanEntityTypeResponse>
     */
    cleanEntityType(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .cleanEntityType(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.Utilities/AddTrainingPhrases
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AddTrainingPhrasesResponse>
     */
    addTrainingPhrases(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .addTrainingPhrases(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.Utilities/AddTrainingPhrasesFromCSV
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.AddTrainingPhrasesResponse>
     */
    addTrainingPhrasesFromCSV(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .addTrainingPhrasesFromCSV(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
UtilitiesClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: UtilitiesClient, deps: [{ token: GRPC_UTILITIES_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
UtilitiesClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: UtilitiesClient, providedIn: 'any' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: UtilitiesClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_UTILITIES_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5wYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvdXRpbGl0eS5wYnNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsY0FBYztBQUNkLEVBQUU7QUFDRiwyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFDYixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFDTCxtQkFBbUIsRUFFbkIsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sS0FBSyxTQUFTLE1BQU0sY0FBYyxDQUFDO0FBVzFDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFDbEU7O0dBRUc7QUFFSCxNQUFNLE9BQU8sZUFBZTtJQW1MMUIsWUFDc0QsUUFBYSxFQUNwQyxhQUFxQyxFQUMxRCxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBbkw5Qjs7OztXQUlHO1FBQ0gsU0FBSSxHQUFHO1lBQ0w7Ozs7OztlQU1HO1lBQ0gsYUFBYSxFQUFFLENBQ2IsV0FBMkMsRUFDM0MsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ29CLEVBQUU7Z0JBQzFELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUscUNBQXFDO29CQUMzQyxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyxvQkFBb0I7b0JBQzVDLGFBQWEsRUFBRSxTQUFTLENBQUMscUJBQXFCO2lCQUMvQyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0Q7Ozs7OztlQU1HO1lBQ0gscUJBQXFCLEVBQUUsQ0FDckIsV0FBbUQsRUFDbkQsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQzRCLEVBQUU7Z0JBQ2xFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUsNkNBQTZDO29CQUNuRCxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyw0QkFBNEI7b0JBQ3BELGFBQWEsRUFBRSxTQUFTLENBQUMsNkJBQTZCO2lCQUN2RCxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0Q7Ozs7OztlQU1HO1lBQ0gsZUFBZSxFQUFFLENBQ2YsV0FBNkMsRUFDN0MsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ3NCLEVBQUU7Z0JBQzVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUsdUNBQXVDO29CQUM3QyxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyxzQkFBc0I7b0JBQzlDLGFBQWEsRUFBRSxTQUFTLENBQUMsdUJBQXVCO2lCQUNqRCxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0Q7Ozs7OztlQU1HO1lBQ0gsV0FBVyxFQUFFLENBQ1gsV0FBeUMsRUFDekMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ2tCLEVBQUU7Z0JBQ3hELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUsbUNBQW1DO29CQUN6QyxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyxrQkFBa0I7b0JBQzFDLGFBQWEsRUFBRSxTQUFTLENBQUMsbUJBQW1CO2lCQUM3QyxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0Q7Ozs7OztlQU1HO1lBQ0gsbUJBQW1CLEVBQUUsQ0FDbkIsV0FBaUQsRUFDakQsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQzBCLEVBQUU7Z0JBQ2hFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUsMkNBQTJDO29CQUNqRCxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQywwQkFBMEI7b0JBQ2xELGFBQWEsRUFBRSxTQUFTLENBQUMsMkJBQTJCO2lCQUNyRCxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0Q7Ozs7OztlQU1HO1lBQ0gsZUFBZSxFQUFFLENBQ2YsV0FBNkMsRUFDN0MsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ3NCLEVBQUU7Z0JBQzVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUsdUNBQXVDO29CQUM3QyxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyxzQkFBc0I7b0JBQzlDLGFBQWEsRUFBRSxTQUFTLENBQUMsdUJBQXVCO2lCQUNqRCxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0Q7Ozs7OztlQU1HO1lBQ0gsa0JBQWtCLEVBQUUsQ0FDbEIsV0FBZ0QsRUFDaEQsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ3lCLEVBQUU7Z0JBQy9ELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUsMENBQTBDO29CQUNoRCxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyx5QkFBeUI7b0JBQ2pELGFBQWEsRUFBRSxTQUFTLENBQUMsMEJBQTBCO2lCQUNwRCxDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0Q7Ozs7OztlQU1HO1lBQ0gseUJBQXlCLEVBQUUsQ0FDekIsV0FBdUQsRUFDdkQsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ3lCLEVBQUU7Z0JBQy9ELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUsaURBQWlEO29CQUN2RCxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWSxFQUFFLFNBQVMsQ0FBQyxnQ0FBZ0M7b0JBQ3hELGFBQWEsRUFBRSxTQUFTLENBQUMsMEJBQTBCO2lCQUNwRCxDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQztRQU9BLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsYUFBYSxDQUNYLFdBQTJDLEVBQzNDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsYUFBYSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDM0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gscUJBQXFCLENBQ25CLFdBQW1ELEVBQ25ELGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IscUJBQXFCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUNuRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxlQUFlLENBQ2IsV0FBNkMsRUFDN0MsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixlQUFlLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUM3QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxXQUFXLENBQ1QsV0FBeUMsRUFDekMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixXQUFXLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUN6QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxtQkFBbUIsQ0FDakIsV0FBaUQsRUFDakQsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFO1FBRXBDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQ2pELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGVBQWUsQ0FDYixXQUE2QyxFQUM3QyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLGVBQWUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDO2FBQzdDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGtCQUFrQixDQUNoQixXQUFnRCxFQUNoRCxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUU7UUFFcEMsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDaEQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gseUJBQXlCLENBQ3ZCLFdBQXVELEVBQ3ZELGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IseUJBQXlCLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQzthQUN2RCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7OzRHQXpUVSxlQUFlLGtCQW9MSiw4QkFBOEIsNkJBQzFDLG1CQUFtQjtnSEFyTGxCLGVBQWUsY0FERixLQUFLOzJGQUNsQixlQUFlO2tCQUQzQixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTs7MEJBcUw1QixRQUFROzswQkFBSSxNQUFNOzJCQUFDLDhCQUE4Qjs7MEJBQ2pELE1BQU07MkJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR3JwY0NhbGxUeXBlLFxuICBHcnBjQ2xpZW50LFxuICBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgR3JwY0V2ZW50LFxuICBHcnBjTWV0YWRhdGFcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQge1xuICBHUlBDX0NMSUVOVF9GQUNUT1JZLFxuICBHcnBjSGFuZGxlcixcbiAgdGFrZU1lc3NhZ2VzLFxuICB0aHJvd1N0YXR1c0Vycm9yc1xufSBmcm9tICdAbmd4LWdycGMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB0aGlzUHJvdG8gZnJvbSAnLi91dGlsaXR5LnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwMSBmcm9tICcuLi8uLi9vbmRld28vbmx1L2NvbnRleHQucGInO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDAyIGZyb20gJy4uLy4uL29uZGV3by9ubHUvY29tbW9uLnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwMyBmcm9tICcuLi8uLi9vbmRld28vbmx1L29wZXJhdGlvbnMucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDQgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDUgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDYgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDcgZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDA4IGZyb20gJy4uLy4uL29uZGV3by9ubHUvaW50ZW50LnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAwOSBmcm9tICcuLi8uLi9vbmRld28vbmx1L2VudGl0eS10eXBlLnBiJztcbmltcG9ydCB7IEdSUENfVVRJTElUSUVTX0NMSUVOVF9TRVRUSU5HUyB9IGZyb20gJy4vdXRpbGl0eS5wYmNvbmYnO1xuLyoqXG4gKiBTZXJ2aWNlIGNsaWVudCBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5VdGlsaXRpZXNcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAnYW55JyB9KVxuZXhwb3J0IGNsYXNzIFV0aWxpdGllc0NsaWVudCB7XG4gIHByaXZhdGUgY2xpZW50OiBHcnBjQ2xpZW50PGFueT47XG5cbiAgLyoqXG4gICAqIFJhdyBSUEMgaW1wbGVtZW50YXRpb24gZm9yIGVhY2ggc2VydmljZSBjbGllbnQgbWV0aG9kLlxuICAgKiBUaGUgcmF3IG1ldGhvZHMgcHJvdmlkZSBtb3JlIGNvbnRyb2wgb24gdGhlIGluY29taW5nIGRhdGEgYW5kIGV2ZW50cy4gRS5nLiB0aGV5IGNhbiBiZSB1c2VmdWwgdG8gcmVhZCBzdGF0dXMgYE9LYCBtZXRhZGF0YS5cbiAgICogQXR0ZW50aW9uOiB0aGVzZSBtZXRob2RzIGRvIG5vdCB0aHJvdyBlcnJvcnMgd2hlbiBub24temVybyBzdGF0dXMgY29kZXMgYXJlIHJlY2VpdmVkLlxuICAgKi9cbiAgJHJhdyA9IHtcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5VdGlsaXRpZXMvVmFsaWRhdGVSZWdleFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5WYWxpZGF0ZVJlZ2V4UmVzcG9uc2U+PlxuICAgICAqL1xuICAgIHZhbGlkYXRlUmVnZXg6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVmFsaWRhdGVSZWdleFJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVmFsaWRhdGVSZWdleFJlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5VdGlsaXRpZXMvVmFsaWRhdGVSZWdleCcsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLlZhbGlkYXRlUmVnZXhSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uVmFsaWRhdGVSZWdleFJlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlV0aWxpdGllcy9WYWxpZGF0ZUVtYmVkZGVkUmVnZXhcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVzcG9uc2U+PlxuICAgICAqL1xuICAgIHZhbGlkYXRlRW1iZWRkZWRSZWdleDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5WYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLlZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5VdGlsaXRpZXMvVmFsaWRhdGVFbWJlZGRlZFJlZ2V4JyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVmFsaWRhdGVFbWJlZGRlZFJlZ2V4UmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLlZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlV0aWxpdGllcy9DbGVhbkFsbEludGVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGNsZWFuQWxsSW50ZW50czogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DbGVhbkFsbEludGVudHNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkNsZWFuQWxsSW50ZW50c1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5VdGlsaXRpZXMvQ2xlYW5BbGxJbnRlbnRzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQ2xlYW5BbGxJbnRlbnRzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkNsZWFuQWxsSW50ZW50c1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlV0aWxpdGllcy9DbGVhbkludGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5DbGVhbkludGVudFJlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBjbGVhbkludGVudDogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DbGVhbkludGVudFJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ2xlYW5JbnRlbnRSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuVXRpbGl0aWVzL0NsZWFuSW50ZW50JyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQ2xlYW5JbnRlbnRSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQ2xlYW5JbnRlbnRSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5VdGlsaXRpZXMvQ2xlYW5BbGxFbnRpdHlUeXBlc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5DbGVhbkFsbEVudGl0eVR5cGVzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGNsZWFuQWxsRW50aXR5VHlwZXM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ2xlYW5BbGxFbnRpdHlUeXBlc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5VdGlsaXRpZXMvQ2xlYW5BbGxFbnRpdHlUeXBlcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkNsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlV0aWxpdGllcy9DbGVhbkVudGl0eVR5cGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGNsZWFuRW50aXR5VHlwZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DbGVhbkVudGl0eVR5cGVSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkNsZWFuRW50aXR5VHlwZVJlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5VdGlsaXRpZXMvQ2xlYW5FbnRpdHlUeXBlJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQ2xlYW5FbnRpdHlUeXBlUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkNsZWFuRW50aXR5VHlwZVJlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlV0aWxpdGllcy9BZGRUcmFpbmluZ1BocmFzZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2U+PlxuICAgICAqL1xuICAgIGFkZFRyYWluaW5nUGhyYXNlczogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5BZGRUcmFpbmluZ1BocmFzZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5VdGlsaXRpZXMvQWRkVHJhaW5pbmdQaHJhc2VzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LlV0aWxpdGllcy9BZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBhZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5VdGlsaXRpZXMvQWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEdSUENfVVRJTElUSUVTX0NMSUVOVF9TRVRUSU5HUykgc2V0dGluZ3M6IGFueSxcbiAgICBASW5qZWN0KEdSUENfQ0xJRU5UX0ZBQ1RPUlkpIGNsaWVudEZhY3Rvcnk6IEdycGNDbGllbnRGYWN0b3J5PGFueT4sXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBHcnBjSGFuZGxlclxuICApIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudEZhY3RvcnkuY3JlYXRlQ2xpZW50KCdvbmRld28ubmx1LlV0aWxpdGllcycsIHNldHRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5VdGlsaXRpZXMvVmFsaWRhdGVSZWdleFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5WYWxpZGF0ZVJlZ2V4UmVzcG9uc2U+XG4gICAqL1xuICB2YWxpZGF0ZVJlZ2V4KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uVmFsaWRhdGVSZWdleFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlZhbGlkYXRlUmVnZXhSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC52YWxpZGF0ZVJlZ2V4KHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuVXRpbGl0aWVzL1ZhbGlkYXRlRW1iZWRkZWRSZWdleFxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5WYWxpZGF0ZUVtYmVkZGVkUmVnZXhSZXNwb25zZT5cbiAgICovXG4gIHZhbGlkYXRlRW1iZWRkZWRSZWdleChcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLlZhbGlkYXRlRW1iZWRkZWRSZWdleFJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLlZhbGlkYXRlRW1iZWRkZWRSZWdleFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLnZhbGlkYXRlRW1iZWRkZWRSZWdleChyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlV0aWxpdGllcy9DbGVhbkFsbEludGVudHNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQ2xlYW5BbGxJbnRlbnRzUmVzcG9uc2U+XG4gICAqL1xuICBjbGVhbkFsbEludGVudHMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DbGVhbkFsbEludGVudHNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5DbGVhbkFsbEludGVudHNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5jbGVhbkFsbEludGVudHMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5VdGlsaXRpZXMvQ2xlYW5JbnRlbnRcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQ2xlYW5JbnRlbnRSZXNwb25zZT5cbiAgICovXG4gIGNsZWFuSW50ZW50KFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ2xlYW5JbnRlbnRSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5DbGVhbkludGVudFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmNsZWFuSW50ZW50KHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuVXRpbGl0aWVzL0NsZWFuQWxsRW50aXR5VHlwZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQ2xlYW5BbGxFbnRpdHlUeXBlc1Jlc3BvbnNlPlxuICAgKi9cbiAgY2xlYW5BbGxFbnRpdHlUeXBlcyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkNsZWFuQWxsRW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5DbGVhbkFsbEVudGl0eVR5cGVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuY2xlYW5BbGxFbnRpdHlUeXBlcyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LlV0aWxpdGllcy9DbGVhbkVudGl0eVR5cGVcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQ2xlYW5FbnRpdHlUeXBlUmVzcG9uc2U+XG4gICAqL1xuICBjbGVhbkVudGl0eVR5cGUoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DbGVhbkVudGl0eVR5cGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5DbGVhbkVudGl0eVR5cGVSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5jbGVhbkVudGl0eVR5cGUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5VdGlsaXRpZXMvQWRkVHJhaW5pbmdQaHJhc2VzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlPlxuICAgKi9cbiAgYWRkVHJhaW5pbmdQaHJhc2VzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQWRkVHJhaW5pbmdQaHJhc2VzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuYWRkVHJhaW5pbmdQaHJhc2VzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuVXRpbGl0aWVzL0FkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1ZcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQWRkVHJhaW5pbmdQaHJhc2VzUmVzcG9uc2U+XG4gICAqL1xuICBhZGRUcmFpbmluZ1BocmFzZXNGcm9tQ1NWKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQWRkVHJhaW5pbmdQaHJhc2VzRnJvbUNTVlJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkFkZFRyYWluaW5nUGhyYXNlc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmFkZFRyYWluaW5nUGhyYXNlc0Zyb21DU1YocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxufVxuIl19