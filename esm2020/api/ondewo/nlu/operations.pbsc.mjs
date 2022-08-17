/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './operations.pb';
import * as googleProtobuf005 from '@ngx-grpc/well-known-types';
import { GRPC_OPERATIONS_CLIENT_SETTINGS } from './operations.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-grpc/core";
/**
 * Service client implementation for ondewo.nlu.Operations
 */
export class OperationsClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /ondewo.nlu.Operations/ListOperations
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListOperationsResponse>>
             */
            listOperations: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Operations/ListOperations',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ListOperationsRequest,
                    responseClass: thisProto.ListOperationsResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.Operations/GetOperation
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.Operation>>
             */
            getOperation: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Operations/GetOperation',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetOperationRequest,
                    responseClass: thisProto.Operation
                });
            },
            /**
             * Unary call: /ondewo.nlu.Operations/DeleteOperation
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf005.Empty>>
             */
            deleteOperation: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Operations/DeleteOperation',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.DeleteOperationRequest,
                    responseClass: googleProtobuf005.Empty
                });
            },
            /**
             * Unary call: /ondewo.nlu.Operations/CancelOperation
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf005.Empty>>
             */
            cancelOperation: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.Operations/CancelOperation',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CancelOperationRequest,
                    responseClass: googleProtobuf005.Empty
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.nlu.Operations', settings);
    }
    /**
     * Unary call @/ondewo.nlu.Operations/ListOperations
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListOperationsResponse>
     */
    listOperations(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listOperations(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.Operations/GetOperation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.Operation>
     */
    getOperation(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getOperation(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.Operations/DeleteOperation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf005.Empty>
     */
    deleteOperation(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deleteOperation(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.Operations/CancelOperation
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf005.Empty>
     */
    cancelOperation(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .cancelOperation(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
OperationsClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: OperationsClient, deps: [{ token: GRPC_OPERATIONS_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
OperationsClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: OperationsClient, providedIn: 'any' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: OperationsClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_OPERATIONS_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlcmF0aW9ucy5wYnNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL29uZGV3by9ubHUvb3BlcmF0aW9ucy5wYnNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsY0FBYztBQUNkLEVBQUU7QUFDRiwyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsWUFBWSxFQUlaLFlBQVksRUFDYixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFDTCxtQkFBbUIsRUFFbkIsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sS0FBSyxTQUFTLE1BQU0saUJBQWlCLENBQUM7QUFNN0MsT0FBTyxLQUFLLGlCQUFpQixNQUFNLDRCQUE0QixDQUFDO0FBR2hFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFDdEU7O0dBRUc7QUFFSCxNQUFNLE9BQU8sZ0JBQWdCO0lBK0YzQixZQUN1RCxRQUFhLEVBQ3JDLGFBQXFDLEVBQzFELE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUEvRjlCOzs7O1dBSUc7UUFDSCxTQUFJLEdBQUc7WUFDTDs7Ozs7O2VBTUc7WUFDSCxjQUFjLEVBQUUsQ0FDZCxXQUE0QyxFQUM1QyxlQUFlLEdBQUcsSUFBSSxZQUFZLEVBQUUsRUFDcUIsRUFBRTtnQkFDM0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDekIsSUFBSSxFQUFFLFlBQVksQ0FBQyxLQUFLO29CQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07b0JBQ25CLElBQUksRUFBRSx1Q0FBdUM7b0JBQzdDLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixZQUFZ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RUFBRTtRQUVwQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsZUFBZSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7YUFDN0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs2R0FyS1UsZ0JBQWdCLGtCQWdHTCwrQkFBK0IsNkJBQzNDLG1CQUFtQjtpSEFqR2xCLGdCQUFnQixjQURILEtBQUs7MkZBQ2xCLGdCQUFnQjtrQkFENUIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUU7OzBCQWlHNUIsUUFBUTs7MEJBQUksTUFBTTsyQkFBQywrQkFBK0I7OzBCQUNsRCxNQUFNOzJCQUFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcbi8vXG4vLyBUSElTIElTIEEgR0VORVJBVEVEIEZJTEVcbi8vIERPIE5PVCBNT0RJRlkgSVQhIFlPVVIgQ0hBTkdFUyBXSUxMIEJFIExPU1RcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdycGNDYWxsVHlwZSxcbiAgR3JwY0NsaWVudCxcbiAgR3JwY0NsaWVudEZhY3RvcnksXG4gIEdycGNFdmVudCxcbiAgR3JwY01ldGFkYXRhXG59IGZyb20gJ0BuZ3gtZ3JwYy9jb21tb24nO1xuaW1wb3J0IHtcbiAgR1JQQ19DTElFTlRfRkFDVE9SWSxcbiAgR3JwY0hhbmRsZXIsXG4gIHRha2VNZXNzYWdlcyxcbiAgdGhyb3dTdGF0dXNFcnJvcnNcbn0gZnJvbSAnQG5neC1ncnBjL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgdGhpc1Byb3RvIGZyb20gJy4vb3BlcmF0aW9ucy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDAgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9odHRwLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAxIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAyIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAzIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwNCBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA1IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVJwYzAwNiBmcm9tICcuLi8uLi9nb29nbGUvcnBjL3N0YXR1cy5wYic7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDcgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9vcGVyYXRpb24tbWV0YWRhdGEucGInO1xuaW1wb3J0IHsgR1JQQ19PUEVSQVRJT05TX0NMSUVOVF9TRVRUSU5HUyB9IGZyb20gJy4vb3BlcmF0aW9ucy5wYmNvbmYnO1xuLyoqXG4gKiBTZXJ2aWNlIGNsaWVudCBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5PcGVyYXRpb25zXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ2FueScgfSlcbmV4cG9ydCBjbGFzcyBPcGVyYXRpb25zQ2xpZW50IHtcbiAgcHJpdmF0ZSBjbGllbnQ6IEdycGNDbGllbnQ8YW55PjtcblxuICAvKipcbiAgICogUmF3IFJQQyBpbXBsZW1lbnRhdGlvbiBmb3IgZWFjaCBzZXJ2aWNlIGNsaWVudCBtZXRob2QuXG4gICAqIFRoZSByYXcgbWV0aG9kcyBwcm92aWRlIG1vcmUgY29udHJvbCBvbiB0aGUgaW5jb21pbmcgZGF0YSBhbmQgZXZlbnRzLiBFLmcuIHRoZXkgY2FuIGJlIHVzZWZ1bCB0byByZWFkIHN0YXR1cyBgT0tgIG1ldGFkYXRhLlxuICAgKiBBdHRlbnRpb246IHRoZXNlIG1ldGhvZHMgZG8gbm90IHRocm93IGVycm9ycyB3aGVuIG5vbi16ZXJvIHN0YXR1cyBjb2RlcyBhcmUgcmVjZWl2ZWQuXG4gICAqL1xuICAkcmF3ID0ge1xuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1Lk9wZXJhdGlvbnMvTGlzdE9wZXJhdGlvbnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdE9wZXJhdGlvbnNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdE9wZXJhdGlvbnM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdE9wZXJhdGlvbnNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RPcGVyYXRpb25zUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1Lk9wZXJhdGlvbnMvTGlzdE9wZXJhdGlvbnMnLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5MaXN0T3BlcmF0aW9uc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0T3BlcmF0aW9uc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1Lk9wZXJhdGlvbnMvR2V0T3BlcmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLk9wZXJhdGlvbj4+XG4gICAgICovXG4gICAgZ2V0T3BlcmF0aW9uOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldE9wZXJhdGlvblJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uT3BlcmF0aW9uPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5PcGVyYXRpb25zL0dldE9wZXJhdGlvbicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkdldE9wZXJhdGlvblJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5PcGVyYXRpb25cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuT3BlcmF0aW9ucy9EZWxldGVPcGVyYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwNS5FbXB0eT4+XG4gICAgICovXG4gICAgZGVsZXRlT3BlcmF0aW9uOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZU9wZXJhdGlvblJlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwNS5FbXB0eT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuT3BlcmF0aW9ucy9EZWxldGVPcGVyYXRpb24nLFxuICAgICAgICByZXF1ZXN0RGF0YSxcbiAgICAgICAgcmVxdWVzdE1ldGFkYXRhLFxuICAgICAgICByZXF1ZXN0Q2xhc3M6IHRoaXNQcm90by5EZWxldGVPcGVyYXRpb25SZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiBnb29nbGVQcm90b2J1ZjAwNS5FbXB0eVxuICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBVbmFyeSBjYWxsOiAvb25kZXdvLm5sdS5PcGVyYXRpb25zL0NhbmNlbE9wZXJhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDA1LkVtcHR5Pj5cbiAgICAgKi9cbiAgICBjYW5jZWxPcGVyYXRpb246IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ2FuY2VsT3BlcmF0aW9uUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDA1LkVtcHR5Pj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5PcGVyYXRpb25zL0NhbmNlbE9wZXJhdGlvbicsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkNhbmNlbE9wZXJhdGlvblJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IGdvb2dsZVByb3RvYnVmMDA1LkVtcHR5XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChHUlBDX09QRVJBVElPTlNfQ0xJRU5UX1NFVFRJTkdTKSBzZXR0aW5nczogYW55LFxuICAgIEBJbmplY3QoR1JQQ19DTElFTlRfRkFDVE9SWSkgY2xpZW50RmFjdG9yeTogR3JwY0NsaWVudEZhY3Rvcnk8YW55PixcbiAgICBwcml2YXRlIGhhbmRsZXI6IEdycGNIYW5kbGVyXG4gICkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50RmFjdG9yeS5jcmVhdGVDbGllbnQoJ29uZGV3by5ubHUuT3BlcmF0aW9ucycsIHNldHRpbmdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5PcGVyYXRpb25zL0xpc3RPcGVyYXRpb25zXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RPcGVyYXRpb25zUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0T3BlcmF0aW9ucyhcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RPcGVyYXRpb25zUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdE9wZXJhdGlvbnNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0T3BlcmF0aW9ucyhyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1Lk9wZXJhdGlvbnMvR2V0T3BlcmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLk9wZXJhdGlvbj5cbiAgICovXG4gIGdldE9wZXJhdGlvbihcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldE9wZXJhdGlvblJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLk9wZXJhdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5nZXRPcGVyYXRpb24ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5PcGVyYXRpb25zL0RlbGV0ZU9wZXJhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDA1LkVtcHR5PlxuICAgKi9cbiAgZGVsZXRlT3BlcmF0aW9uKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uRGVsZXRlT3BlcmF0aW9uUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwNS5FbXB0eT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5kZWxldGVPcGVyYXRpb24ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5PcGVyYXRpb25zL0NhbmNlbE9wZXJhdGlvblxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDA1LkVtcHR5PlxuICAgKi9cbiAgY2FuY2VsT3BlcmF0aW9uKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ2FuY2VsT3BlcmF0aW9uUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTxnb29nbGVQcm90b2J1ZjAwNS5FbXB0eT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5jYW5jZWxPcGVyYXRpb24ocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxufVxuIl19