/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import { GrpcCallType, GrpcMetadata } from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, takeMessages, throwStatusErrors } from '@ngx-grpc/core';
import * as thisProto from './entity-type.pb';
import * as googleProtobuf004 from '@ngx-grpc/well-known-types';
import * as ondewoNlu010 from '../../ondewo/nlu/operations.pb';
import { GRPC_ENTITY_TYPES_CLIENT_SETTINGS } from './entity-type.pbconf';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-grpc/core";
/**
 * Service client implementation for ondewo.nlu.EntityTypes
 */
export class EntityTypesClient {
    constructor(settings, clientFactory, handler) {
        this.handler = handler;
        /**
         * Raw RPC implementation for each service client method.
         * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
         * Attention: these methods do not throw errors when non-zero status codes are received.
         */
        this.$raw = {
            /**
             * Unary call: /ondewo.nlu.EntityTypes/ListEntityTypes
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListEntityTypesResponse>>
             */
            listEntityTypes: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/ListEntityTypes',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ListEntityTypesRequest,
                    responseClass: thisProto.ListEntityTypesResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.EntityTypes/GetEntityType
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.EntityType>>
             */
            getEntityType: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/GetEntityType',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.GetEntityTypeRequest,
                    responseClass: thisProto.EntityType
                });
            },
            /**
             * Unary call: /ondewo.nlu.EntityTypes/CreateEntityType
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.EntityType>>
             */
            createEntityType: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/CreateEntityType',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.CreateEntityTypeRequest,
                    responseClass: thisProto.EntityType
                });
            },
            /**
             * Unary call: /ondewo.nlu.EntityTypes/UpdateEntityType
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.EntityType>>
             */
            updateEntityType: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/UpdateEntityType',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.UpdateEntityTypeRequest,
                    responseClass: thisProto.EntityType
                });
            },
            /**
             * Unary call: /ondewo.nlu.EntityTypes/DeleteEntityType
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<googleProtobuf004.Empty>>
             */
            deleteEntityType: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/DeleteEntityType',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.DeleteEntityTypeRequest,
                    responseClass: googleProtobuf004.Empty
                });
            },
            /**
             * Unary call: /ondewo.nlu.EntityTypes/BatchUpdateEntityTypes
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<ondewoNlu010.Operation>>
             */
            batchUpdateEntityTypes: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/BatchUpdateEntityTypes',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.BatchUpdateEntityTypesRequest,
                    responseClass: ondewoNlu010.Operation
                });
            },
            /**
             * Unary call: /ondewo.nlu.EntityTypes/BatchDeleteEntityTypes
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<ondewoNlu010.Operation>>
             */
            batchDeleteEntityTypes: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/BatchDeleteEntityTypes',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.BatchDeleteEntityTypesRequest,
                    responseClass: ondewoNlu010.Operation
                });
            },
            /**
             * Unary call: /ondewo.nlu.EntityTypes/BatchCreateEntities
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>
             */
            batchCreateEntities: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/BatchCreateEntities',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.BatchCreateEntitiesRequest,
                    responseClass: thisProto.BatchEntitiesResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.EntityTypes/BatchUpdateEntities
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>
             */
            batchUpdateEntities: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/BatchUpdateEntities',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.BatchUpdateEntitiesRequest,
                    responseClass: thisProto.BatchEntitiesResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.EntityTypes/BatchGetEntities
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.BatchEntitiesResponse>>
             */
            batchGetEntities: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/BatchGetEntities',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.BatchGetEntitiesRequest,
                    responseClass: thisProto.BatchEntitiesResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.EntityTypes/BatchDeleteEntities
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.BatchDeleteEntitiesResponse>>
             */
            batchDeleteEntities: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/BatchDeleteEntities',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.BatchDeleteEntitiesRequest,
                    responseClass: thisProto.BatchDeleteEntitiesResponse
                });
            },
            /**
             * Unary call: /ondewo.nlu.EntityTypes/ListEntities
             *
             * @param requestMessage Request message
             * @param requestMetadata Request metadata
             * @returns Observable<GrpcEvent<thisProto.ListEntitiesResponse>>
             */
            listEntities: (requestData, requestMetadata = new GrpcMetadata()) => {
                return this.handler.handle({
                    type: GrpcCallType.unary,
                    client: this.client,
                    path: '/ondewo.nlu.EntityTypes/ListEntities',
                    requestData,
                    requestMetadata,
                    requestClass: thisProto.ListEntitiesRequest,
                    responseClass: thisProto.ListEntitiesResponse
                });
            }
        };
        this.client = clientFactory.createClient('ondewo.nlu.EntityTypes', settings);
    }
    /**
     * Unary call @/ondewo.nlu.EntityTypes/ListEntityTypes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListEntityTypesResponse>
     */
    listEntityTypes(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listEntityTypes(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.EntityTypes/GetEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.EntityType>
     */
    getEntityType(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .getEntityType(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.EntityTypes/CreateEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.EntityType>
     */
    createEntityType(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .createEntityType(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.EntityTypes/UpdateEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.EntityType>
     */
    updateEntityType(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .updateEntityType(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.EntityTypes/DeleteEntityType
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<googleProtobuf004.Empty>
     */
    deleteEntityType(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .deleteEntityType(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.EntityTypes/BatchUpdateEntityTypes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu010.Operation>
     */
    batchUpdateEntityTypes(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .batchUpdateEntityTypes(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.EntityTypes/BatchDeleteEntityTypes
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<ondewoNlu010.Operation>
     */
    batchDeleteEntityTypes(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .batchDeleteEntityTypes(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.EntityTypes/BatchCreateEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchEntitiesResponse>
     */
    batchCreateEntities(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .batchCreateEntities(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.EntityTypes/BatchUpdateEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchEntitiesResponse>
     */
    batchUpdateEntities(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .batchUpdateEntities(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.EntityTypes/BatchGetEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchEntitiesResponse>
     */
    batchGetEntities(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .batchGetEntities(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.EntityTypes/BatchDeleteEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.BatchDeleteEntitiesResponse>
     */
    batchDeleteEntities(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .batchDeleteEntities(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
    /**
     * Unary call @/ondewo.nlu.EntityTypes/ListEntities
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<thisProto.ListEntitiesResponse>
     */
    listEntities(requestData, requestMetadata = new GrpcMetadata()) {
        return this.$raw
            .listEntities(requestData, requestMetadata)
            .pipe(throwStatusErrors(), takeMessages());
    }
}
EntityTypesClient.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: EntityTypesClient, deps: [{ token: GRPC_ENTITY_TYPES_CLIENT_SETTINGS, optional: true }, { token: GRPC_CLIENT_FACTORY }, { token: i1.GrpcHandler }], target: i0.ɵɵFactoryTarget.Injectable });
EntityTypesClient.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: EntityTypesClient, providedIn: 'any' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: EntityTypesClient, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'any' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [GRPC_ENTITY_TYPES_CLIENT_SETTINGS]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [GRPC_CLIENT_FACTORY]
                }] }, { type: i1.GrpcHandler }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LXR5cGUucGJzYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9vbmRld28vbmx1L2VudGl0eS10eXBlLnBic2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2QsRUFBRTtBQUNGLDJCQUEyQjtBQUMzQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDTCxZQUFZLEVBSVosWUFBWSxFQUNiLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUNMLG1CQUFtQixFQUVuQixZQUFZLEVBQ1osaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxLQUFLLFNBQVMsTUFBTSxrQkFBa0IsQ0FBQztBQUs5QyxPQUFPLEtBQUssaUJBQWlCLE1BQU0sNEJBQTRCLENBQUM7QUFNaEUsT0FBTyxLQUFLLFlBQVksTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBQ3pFOztHQUVHO0FBRUgsTUFBTSxPQUFPLGlCQUFpQjtJQXVRNUIsWUFDeUQsUUFBYSxFQUN2QyxhQUFxQyxFQUMxRCxPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBdlE5Qjs7OztXQUlHO1FBQ0gsU0FBSSxHQUFHO1lBQ0w7Ozs7OztlQU1HO1lBQ0gsZUFBZSxFQUFFLENBQ2YsV0FBNkMsRUFDN0MsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFFLEVBQ3NCLEVBQUU7Z0JBQzVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLElBQUksRUFBRSxZQUFZLENBQUMsS0FBSztvQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixJQUFJLEVBQUUs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QUFDLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTs7MEJBeVE1QixRQUFROzswQkFBSSxNQUFNOzJCQUFDLGlDQUFpQzs7MEJBQ3BELE1BQU07MkJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuLy9cbi8vIFRISVMgSVMgQSBHRU5FUkFURUQgRklMRVxuLy8gRE8gTk9UIE1PRElGWSBJVCEgWU9VUiBDSEFOR0VTIFdJTEwgQkUgTE9TVFxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR3JwY0NhbGxUeXBlLFxuICBHcnBjQ2xpZW50LFxuICBHcnBjQ2xpZW50RmFjdG9yeSxcbiAgR3JwY0V2ZW50LFxuICBHcnBjTWV0YWRhdGFcbn0gZnJvbSAnQG5neC1ncnBjL2NvbW1vbic7XG5pbXBvcnQge1xuICBHUlBDX0NMSUVOVF9GQUNUT1JZLFxuICBHcnBjSGFuZGxlcixcbiAgdGFrZU1lc3NhZ2VzLFxuICB0aHJvd1N0YXR1c0Vycm9yc1xufSBmcm9tICdAbmd4LWdycGMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyB0aGlzUHJvdG8gZnJvbSAnLi9lbnRpdHktdHlwZS5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVBcGkwMDAgZnJvbSAnLi4vLi4vZ29vZ2xlL2FwaS9odHRwLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAxIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZUFwaTAwMiBmcm9tICcuLi8uLi9nb29nbGUvYXBpL2Fubm90YXRpb25zLnBiJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDAzIGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVByb3RvYnVmMDA0IGZyb20gJ0BuZ3gtZ3JwYy93ZWxsLWtub3duLXR5cGVzJztcbmltcG9ydCAqIGFzIGdvb2dsZVJwYzAwNSBmcm9tICcuLi8uLi9nb29nbGUvcnBjL3N0YXR1cy5wYic7XG5pbXBvcnQgKiBhcyBnb29nbGVQcm90b2J1ZjAwNiBmcm9tICdAbmd4LWdycGMvd2VsbC1rbm93bi10eXBlcyc7XG5pbXBvcnQgKiBhcyBvbmRld29ObHUwMDcgZnJvbSAnLi4vLi4vb25kZXdvL25sdS9vcGVyYXRpb24tbWV0YWRhdGEucGInO1xuaW1wb3J0ICogYXMgZ29vZ2xlUHJvdG9idWYwMDggZnJvbSAnQG5neC1ncnBjL3dlbGwta25vd24tdHlwZXMnO1xuaW1wb3J0ICogYXMgb25kZXdvTmx1MDA5IGZyb20gJy4uLy4uL29uZGV3by9ubHUvY29tbW9uLnBiJztcbmltcG9ydCAqIGFzIG9uZGV3b05sdTAxMCBmcm9tICcuLi8uLi9vbmRld28vbmx1L29wZXJhdGlvbnMucGInO1xuaW1wb3J0IHsgR1JQQ19FTlRJVFlfVFlQRVNfQ0xJRU5UX1NFVFRJTkdTIH0gZnJvbSAnLi9lbnRpdHktdHlwZS5wYmNvbmYnO1xuLyoqXG4gKiBTZXJ2aWNlIGNsaWVudCBpbXBsZW1lbnRhdGlvbiBmb3Igb25kZXdvLm5sdS5FbnRpdHlUeXBlc1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdhbnknIH0pXG5leHBvcnQgY2xhc3MgRW50aXR5VHlwZXNDbGllbnQge1xuICBwcml2YXRlIGNsaWVudDogR3JwY0NsaWVudDxhbnk+O1xuXG4gIC8qKlxuICAgKiBSYXcgUlBDIGltcGxlbWVudGF0aW9uIGZvciBlYWNoIHNlcnZpY2UgY2xpZW50IG1ldGhvZC5cbiAgICogVGhlIHJhdyBtZXRob2RzIHByb3ZpZGUgbW9yZSBjb250cm9sIG9uIHRoZSBpbmNvbWluZyBkYXRhIGFuZCBldmVudHMuIEUuZy4gdGhleSBjYW4gYmUgdXNlZnVsIHRvIHJlYWQgc3RhdHVzIGBPS2AgbWV0YWRhdGEuXG4gICAqIEF0dGVudGlvbjogdGhlc2UgbWV0aG9kcyBkbyBub3QgdGhyb3cgZXJyb3JzIHdoZW4gbm9uLXplcm8gc3RhdHVzIGNvZGVzIGFyZSByZWNlaXZlZC5cbiAgICovXG4gICRyYXcgPSB7XG4gICAgLyoqXG4gICAgICogVW5hcnkgY2FsbDogL29uZGV3by5ubHUuRW50aXR5VHlwZXMvTGlzdEVudGl0eVR5cGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkxpc3RFbnRpdHlUeXBlc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBsaXN0RW50aXR5VHlwZXM6IChcbiAgICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdEVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0RW50aXR5VHlwZXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuRW50aXR5VHlwZXMvTGlzdEVudGl0eVR5cGVzJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uTGlzdEVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICAgICAgcmVzcG9uc2VDbGFzczogdGhpc1Byb3RvLkxpc3RFbnRpdHlUeXBlc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkVudGl0eVR5cGVzL0dldEVudGl0eVR5cGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRW50aXR5VHlwZT4+XG4gICAgICovXG4gICAgZ2V0RW50aXR5VHlwZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5HZXRFbnRpdHlUeXBlUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5FbnRpdHlUeXBlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9HZXRFbnRpdHlUeXBlJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uR2V0RW50aXR5VHlwZVJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5FbnRpdHlUeXBlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkVudGl0eVR5cGVzL0NyZWF0ZUVudGl0eVR5cGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRW50aXR5VHlwZT4+XG4gICAgICovXG4gICAgY3JlYXRlRW50aXR5VHlwZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5DcmVhdGVFbnRpdHlUeXBlUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5FbnRpdHlUeXBlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9DcmVhdGVFbnRpdHlUeXBlJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uQ3JlYXRlRW50aXR5VHlwZVJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5FbnRpdHlUeXBlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkVudGl0eVR5cGVzL1VwZGF0ZUVudGl0eVR5cGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uRW50aXR5VHlwZT4+XG4gICAgICovXG4gICAgdXBkYXRlRW50aXR5VHlwZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVFbnRpdHlUeXBlUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5FbnRpdHlUeXBlPj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9VcGRhdGVFbnRpdHlUeXBlJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uVXBkYXRlRW50aXR5VHlwZVJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5FbnRpdHlUeXBlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkVudGl0eVR5cGVzL0RlbGV0ZUVudGl0eVR5cGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDxnb29nbGVQcm90b2J1ZjAwNC5FbXB0eT4+XG4gICAgICovXG4gICAgZGVsZXRlRW50aXR5VHlwZTogKFxuICAgICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5EZWxldGVFbnRpdHlUeXBlUmVxdWVzdCxcbiAgICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICAgICk6IE9ic2VydmFibGU8R3JwY0V2ZW50PGdvb2dsZVByb3RvYnVmMDA0LkVtcHR5Pj4gPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5oYW5kbGUoe1xuICAgICAgICB0eXBlOiBHcnBjQ2FsbFR5cGUudW5hcnksXG4gICAgICAgIGNsaWVudDogdGhpcy5jbGllbnQsXG4gICAgICAgIHBhdGg6ICcvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9EZWxldGVFbnRpdHlUeXBlJyxcbiAgICAgICAgcmVxdWVzdERhdGEsXG4gICAgICAgIHJlcXVlc3RNZXRhZGF0YSxcbiAgICAgICAgcmVxdWVzdENsYXNzOiB0aGlzUHJvdG8uRGVsZXRlRW50aXR5VHlwZVJlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IGdvb2dsZVByb3RvYnVmMDA0LkVtcHR5XG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkVudGl0eVR5cGVzL0JhdGNoVXBkYXRlRW50aXR5VHlwZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDxvbmRld29ObHUwMTAuT3BlcmF0aW9uPj5cbiAgICAgKi9cbiAgICBiYXRjaFVwZGF0ZUVudGl0eVR5cGVzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8b25kZXdvTmx1MDEwLk9wZXJhdGlvbj4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQmF0Y2hVcGRhdGVFbnRpdHlUeXBlcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhdGNoVXBkYXRlRW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiBvbmRld29ObHUwMTAuT3BlcmF0aW9uXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkVudGl0eVR5cGVzL0JhdGNoRGVsZXRlRW50aXR5VHlwZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDxvbmRld29ObHUwMTAuT3BlcmF0aW9uPj5cbiAgICAgKi9cbiAgICBiYXRjaERlbGV0ZUVudGl0eVR5cGVzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoRGVsZXRlRW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8b25kZXdvTmx1MDEwLk9wZXJhdGlvbj4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQmF0Y2hEZWxldGVFbnRpdHlUeXBlcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhdGNoRGVsZXRlRW50aXR5VHlwZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiBvbmRld29ObHUwMTAuT3BlcmF0aW9uXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkVudGl0eVR5cGVzL0JhdGNoQ3JlYXRlRW50aXRpZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmF0Y2hFbnRpdGllc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBiYXRjaENyZWF0ZUVudGl0aWVzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoQ3JlYXRlRW50aXRpZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhdGNoRW50aXRpZXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQmF0Y2hDcmVhdGVFbnRpdGllcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhdGNoQ3JlYXRlRW50aXRpZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQmF0Y2hFbnRpdGllc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkVudGl0eVR5cGVzL0JhdGNoVXBkYXRlRW50aXRpZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmF0Y2hFbnRpdGllc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBiYXRjaFVwZGF0ZUVudGl0aWVzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoVXBkYXRlRW50aXRpZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhdGNoRW50aXRpZXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQmF0Y2hVcGRhdGVFbnRpdGllcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhdGNoVXBkYXRlRW50aXRpZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQmF0Y2hFbnRpdGllc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkVudGl0eVR5cGVzL0JhdGNoR2V0RW50aXRpZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmF0Y2hFbnRpdGllc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBiYXRjaEdldEVudGl0aWVzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoR2V0RW50aXRpZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhdGNoRW50aXRpZXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQmF0Y2hHZXRFbnRpdGllcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhdGNoR2V0RW50aXRpZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQmF0Y2hFbnRpdGllc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkVudGl0eVR5cGVzL0JhdGNoRGVsZXRlRW50aXRpZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uQmF0Y2hEZWxldGVFbnRpdGllc1Jlc3BvbnNlPj5cbiAgICAgKi9cbiAgICBiYXRjaERlbGV0ZUVudGl0aWVzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkJhdGNoRGVsZXRlRW50aXRpZXNSZXF1ZXN0LFxuICAgICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICAgKTogT2JzZXJ2YWJsZTxHcnBjRXZlbnQ8dGhpc1Byb3RvLkJhdGNoRGVsZXRlRW50aXRpZXNSZXNwb25zZT4+ID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZXIuaGFuZGxlKHtcbiAgICAgICAgdHlwZTogR3JwY0NhbGxUeXBlLnVuYXJ5LFxuICAgICAgICBjbGllbnQ6IHRoaXMuY2xpZW50LFxuICAgICAgICBwYXRoOiAnL29uZGV3by5ubHUuRW50aXR5VHlwZXMvQmF0Y2hEZWxldGVFbnRpdGllcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkJhdGNoRGVsZXRlRW50aXRpZXNSZXF1ZXN0LFxuICAgICAgICByZXNwb25zZUNsYXNzOiB0aGlzUHJvdG8uQmF0Y2hEZWxldGVFbnRpdGllc1Jlc3BvbnNlXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFVuYXJ5IGNhbGw6IC9vbmRld28ubmx1LkVudGl0eVR5cGVzL0xpc3RFbnRpdGllc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgICAqIEByZXR1cm5zIE9ic2VydmFibGU8R3JwY0V2ZW50PHRoaXNQcm90by5MaXN0RW50aXRpZXNSZXNwb25zZT4+XG4gICAgICovXG4gICAgbGlzdEVudGl0aWVzOiAoXG4gICAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkxpc3RFbnRpdGllc1JlcXVlc3QsXG4gICAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgICApOiBPYnNlcnZhYmxlPEdycGNFdmVudDx0aGlzUHJvdG8uTGlzdEVudGl0aWVzUmVzcG9uc2U+PiA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVyLmhhbmRsZSh7XG4gICAgICAgIHR5cGU6IEdycGNDYWxsVHlwZS51bmFyeSxcbiAgICAgICAgY2xpZW50OiB0aGlzLmNsaWVudCxcbiAgICAgICAgcGF0aDogJy9vbmRld28ubmx1LkVudGl0eVR5cGVzL0xpc3RFbnRpdGllcycsXG4gICAgICAgIHJlcXVlc3REYXRhLFxuICAgICAgICByZXF1ZXN0TWV0YWRhdGEsXG4gICAgICAgIHJlcXVlc3RDbGFzczogdGhpc1Byb3RvLkxpc3RFbnRpdGllc1JlcXVlc3QsXG4gICAgICAgIHJlc3BvbnNlQ2xhc3M6IHRoaXNQcm90by5MaXN0RW50aXRpZXNSZXNwb25zZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoR1JQQ19FTlRJVFlfVFlQRVNfQ0xJRU5UX1NFVFRJTkdTKSBzZXR0aW5nczogYW55LFxuICAgIEBJbmplY3QoR1JQQ19DTElFTlRfRkFDVE9SWSkgY2xpZW50RmFjdG9yeTogR3JwY0NsaWVudEZhY3Rvcnk8YW55PixcbiAgICBwcml2YXRlIGhhbmRsZXI6IEdycGNIYW5kbGVyXG4gICkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50RmFjdG9yeS5jcmVhdGVDbGllbnQoXG4gICAgICAnb25kZXdvLm5sdS5FbnRpdHlUeXBlcycsXG4gICAgICBzZXR0aW5nc1xuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuRW50aXR5VHlwZXMvTGlzdEVudGl0eVR5cGVzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkxpc3RFbnRpdHlUeXBlc1Jlc3BvbnNlPlxuICAgKi9cbiAgbGlzdEVudGl0eVR5cGVzKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uTGlzdEVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdEVudGl0eVR5cGVzUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAubGlzdEVudGl0eVR5cGVzKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuRW50aXR5VHlwZXMvR2V0RW50aXR5VHlwZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPHRoaXNQcm90by5FbnRpdHlUeXBlPlxuICAgKi9cbiAgZ2V0RW50aXR5VHlwZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkdldEVudGl0eVR5cGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5FbnRpdHlUeXBlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmdldEVudGl0eVR5cGUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9DcmVhdGVFbnRpdHlUeXBlXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkVudGl0eVR5cGU+XG4gICAqL1xuICBjcmVhdGVFbnRpdHlUeXBlKFxuICAgIHJlcXVlc3REYXRhOiB0aGlzUHJvdG8uQ3JlYXRlRW50aXR5VHlwZVJlcXVlc3QsXG4gICAgcmVxdWVzdE1ldGFkYXRhID0gbmV3IEdycGNNZXRhZGF0YSgpXG4gICk6IE9ic2VydmFibGU8dGhpc1Byb3RvLkVudGl0eVR5cGU+IHtcbiAgICByZXR1cm4gdGhpcy4kcmF3XG4gICAgICAuY3JlYXRlRW50aXR5VHlwZShyZXF1ZXN0RGF0YSwgcmVxdWVzdE1ldGFkYXRhKVxuICAgICAgLnBpcGUodGhyb3dTdGF0dXNFcnJvcnMoKSwgdGFrZU1lc3NhZ2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuYXJ5IGNhbGwgQC9vbmRld28ubmx1LkVudGl0eVR5cGVzL1VwZGF0ZUVudGl0eVR5cGVcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRW50aXR5VHlwZT5cbiAgICovXG4gIHVwZGF0ZUVudGl0eVR5cGUoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5VcGRhdGVFbnRpdHlUeXBlUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uRW50aXR5VHlwZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC51cGRhdGVFbnRpdHlUeXBlKHJlcXVlc3REYXRhLCByZXF1ZXN0TWV0YWRhdGEpXG4gICAgICAucGlwZSh0aHJvd1N0YXR1c0Vycm9ycygpLCB0YWtlTWVzc2FnZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogVW5hcnkgY2FsbCBAL29uZGV3by5ubHUuRW50aXR5VHlwZXMvRGVsZXRlRW50aXR5VHlwZVxuICAgKlxuICAgKiBAcGFyYW0gcmVxdWVzdE1lc3NhZ2UgUmVxdWVzdCBtZXNzYWdlXG4gICAqIEBwYXJhbSByZXF1ZXN0TWV0YWRhdGEgUmVxdWVzdCBtZXRhZGF0YVxuICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDA0LkVtcHR5PlxuICAgKi9cbiAgZGVsZXRlRW50aXR5VHlwZShcbiAgICByZXF1ZXN0RGF0YTogdGhpc1Byb3RvLkRlbGV0ZUVudGl0eVR5cGVSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPGdvb2dsZVByb3RvYnVmMDA0LkVtcHR5PiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmRlbGV0ZUVudGl0eVR5cGUocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9CYXRjaFVwZGF0ZUVudGl0eVR5cGVzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8b25kZXdvTmx1MDEwLk9wZXJhdGlvbj5cbiAgICovXG4gIGJhdGNoVXBkYXRlRW50aXR5VHlwZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaFVwZGF0ZUVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTxvbmRld29ObHUwMTAuT3BlcmF0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmJhdGNoVXBkYXRlRW50aXR5VHlwZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9CYXRjaERlbGV0ZUVudGl0eVR5cGVzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8b25kZXdvTmx1MDEwLk9wZXJhdGlvbj5cbiAgICovXG4gIGJhdGNoRGVsZXRlRW50aXR5VHlwZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaERlbGV0ZUVudGl0eVR5cGVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTxvbmRld29ObHUwMTAuT3BlcmF0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmJhdGNoRGVsZXRlRW50aXR5VHlwZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9CYXRjaENyZWF0ZUVudGl0aWVzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoRW50aXRpZXNSZXNwb25zZT5cbiAgICovXG4gIGJhdGNoQ3JlYXRlRW50aXRpZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaENyZWF0ZUVudGl0aWVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmF0Y2hFbnRpdGllc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmJhdGNoQ3JlYXRlRW50aXRpZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9CYXRjaFVwZGF0ZUVudGl0aWVzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoRW50aXRpZXNSZXNwb25zZT5cbiAgICovXG4gIGJhdGNoVXBkYXRlRW50aXRpZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaFVwZGF0ZUVudGl0aWVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmF0Y2hFbnRpdGllc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmJhdGNoVXBkYXRlRW50aXRpZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9CYXRjaEdldEVudGl0aWVzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoRW50aXRpZXNSZXNwb25zZT5cbiAgICovXG4gIGJhdGNoR2V0RW50aXRpZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaEdldEVudGl0aWVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmF0Y2hFbnRpdGllc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmJhdGNoR2V0RW50aXRpZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9CYXRjaERlbGV0ZUVudGl0aWVzXG4gICAqXG4gICAqIEBwYXJhbSByZXF1ZXN0TWVzc2FnZSBSZXF1ZXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIHJlcXVlc3RNZXRhZGF0YSBSZXF1ZXN0IG1ldGFkYXRhXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGU8dGhpc1Byb3RvLkJhdGNoRGVsZXRlRW50aXRpZXNSZXNwb25zZT5cbiAgICovXG4gIGJhdGNoRGVsZXRlRW50aXRpZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5CYXRjaERlbGV0ZUVudGl0aWVzUmVxdWVzdCxcbiAgICByZXF1ZXN0TWV0YWRhdGEgPSBuZXcgR3JwY01ldGFkYXRhKClcbiAgKTogT2JzZXJ2YWJsZTx0aGlzUHJvdG8uQmF0Y2hEZWxldGVFbnRpdGllc1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuJHJhd1xuICAgICAgLmJhdGNoRGVsZXRlRW50aXRpZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbmFyeSBjYWxsIEAvb25kZXdvLm5sdS5FbnRpdHlUeXBlcy9MaXN0RW50aXRpZXNcbiAgICpcbiAgICogQHBhcmFtIHJlcXVlc3RNZXNzYWdlIFJlcXVlc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gcmVxdWVzdE1ldGFkYXRhIFJlcXVlc3QgbWV0YWRhdGFcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZTx0aGlzUHJvdG8uTGlzdEVudGl0aWVzUmVzcG9uc2U+XG4gICAqL1xuICBsaXN0RW50aXRpZXMoXG4gICAgcmVxdWVzdERhdGE6IHRoaXNQcm90by5MaXN0RW50aXRpZXNSZXF1ZXN0LFxuICAgIHJlcXVlc3RNZXRhZGF0YSA9IG5ldyBHcnBjTWV0YWRhdGEoKVxuICApOiBPYnNlcnZhYmxlPHRoaXNQcm90by5MaXN0RW50aXRpZXNSZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLiRyYXdcbiAgICAgIC5saXN0RW50aXRpZXMocmVxdWVzdERhdGEsIHJlcXVlc3RNZXRhZGF0YSlcbiAgICAgIC5waXBlKHRocm93U3RhdHVzRXJyb3JzKCksIHRha2VNZXNzYWdlcygpKTtcbiAgfVxufVxuIl19