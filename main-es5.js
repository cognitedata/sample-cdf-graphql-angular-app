(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/runner/work/sample-cdf-graphql-angular-app/sample-cdf-graphql-angular-app/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2X+A":
    /*!***************************************************************************************************!*\
      !*** ./src/app/components/cognite-model-revisions-list/cognite-model-revisions-list.component.ts ***!
      \***************************************************************************************************/

    /*! exports provided: CogniteModelRevisionsListComponent */

    /***/
    function XA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CogniteModelRevisionsListComponent", function () {
        return CogniteModelRevisionsListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _cognite_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../cognite-api.service */
      "kN/+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function CogniteModelRevisionsListComponent_mat_list_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CogniteModelRevisionsListComponent_mat_list_2_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var item_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onRevisionSelected(item_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "arrow_forward");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.createdTime.toISOString(), " ");
        }
      }

      var CogniteModelRevisionsListComponent = /*#__PURE__*/function () {
        function CogniteModelRevisionsListComponent(cogniteApiService) {
          _classCallCheck(this, CogniteModelRevisionsListComponent);

          this.cogniteApiService = cogniteApiService;
          this.newRevisionId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.loading = true;
          this.revisions = [];
        }

        _createClass(CogniteModelRevisionsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.cogniteApiService.get3DModelRevisions(this.modelId).subscribe(function (result) {
              _this.revisions = result;
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            var _this2 = this;

            this.cogniteApiService.get3DModelRevisions(this.modelId).subscribe(function (result) {
              _this2.revisions = result;
            });
          }
        }, {
          key: "onRevisionSelected",
          value: function onRevisionSelected(newSelectedRevisionId) {
            this.selectedRevision = newSelectedRevisionId;
            this.newRevisionId.emit(newSelectedRevisionId);
          }
        }]);

        return CogniteModelRevisionsListComponent;
      }();

      CogniteModelRevisionsListComponent.ɵfac = function CogniteModelRevisionsListComponent_Factory(t) {
        return new (t || CogniteModelRevisionsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cognite_api_service__WEBPACK_IMPORTED_MODULE_1__["CogniteApiService"]));
      };

      CogniteModelRevisionsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CogniteModelRevisionsListComponent,
        selectors: [["app-cognite-model-revisions-list"]],
        inputs: {
          modelId: "modelId"
        },
        outputs: {
          newRevisionId: "newRevisionId"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 3,
        vars: 1,
        consts: [[1, "flex"], [2, "flex", "1"], [4, "ngFor", "ngForOf"], ["role", "listitem"], ["mat-button", "", 3, "click"]],
        template: function CogniteModelRevisionsListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CogniteModelRevisionsListComponent_mat_list_2_Template, 6, 1, "mat-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.revisions);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2duaXRlLW1vZGVsLXJldmlzaW9ucy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "4KHl":
    /*!***********************************!*\
      !*** ./src/app/graphql.module.ts ***!
      \***********************************/

    /*! exports provided: createApollo, GraphQLModule */

    /***/
    function KHl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createApollo", function () {
        return createApollo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphQLModule", function () {
        return GraphQLModule;
      });
      /* harmony import */


      var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! apollo-angular */
      "/IUn");
      /* harmony import */


      var _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @apollo/client/core */
      "ALmS");
      /* harmony import */


      var apollo_angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! apollo-angular/http */
      "E21e");
      /* harmony import */


      var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @apollo/client/link/context */
      "MWEN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // UPDATE THE URL BELOW TO BE THE CORRECT PROJECT ID


      var URL = 'https://itg.cognite.ai/api/v1/projects/a24a387c5-396e-4443-89d4-cfad8ade6509/graphql'; // <-- add the URL of the GraphQL server here

      function createApollo(httpLink) {
        return {
          link: _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"].from([Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_3__["setContext"])(function () {
            return {
              headers: {
                // Add the API key for api request to your data model
                authorization: "Bearer ".concat(localStorage.getItem('API_KEY'))
              }
            };
          }), httpLink.create({
            uri: URL
          })]),
          cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]()
        };
      }

      var GraphQLModule = function GraphQLModule() {
        _classCallCheck(this, GraphQLModule);
      };

      GraphQLModule.ɵfac = function GraphQLModule_Factory(t) {
        return new (t || GraphQLModule)();
      };

      GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: GraphQLModule
      });
      GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [{
          provide: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["APOLLO_OPTIONS"],
          useFactory: createApollo,
          deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]]
        }]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/
    },

    /***/
    "DTTQ":
    /*!************************************!*\
      !*** ./src/app/itg-api.service.ts ***!
      \************************************/

    /*! exports provided: CogniteITGService */

    /***/
    function DTTQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CogniteITGService", function () {
        return CogniteITGService;
      });
      /* harmony import */


      var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! apollo-angular */
      "/IUn");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "9YHx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var QUERY_GROUPS = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query QueryGroup($modelId: String, $revisionId: String, $groupId: ID) {\n    MyGroup(\n      filter: { modelId: $modelId, revisionId: $revisionId, id: $groupId }\n    ) {\n      id\n      name\n      modelId\n      revisionId\n      nodes {\n        nodeId\n        comment\n      }\n    }\n  }\n"])));
      var CREATE_GROUP = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  mutation CreateGroup(\n    $modelId: String!\n    $revisionId: String!\n    $name: String!\n  ) {\n    CreateMyGroup(modelId: $modelId, revisionId: $revisionId, name: $name) {\n      id\n    }\n  }\n"])));
      var DELETE_GROUP = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  mutation CreateGroup($groupId: ID!) {\n    DeleteMyGroup(id: $groupId) {\n      id\n    }\n  }\n"])));
      var CREATE_NODE = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  mutation CreateNode($nodeId: String!, $comment: String) {\n    MergeMyNode(nodeId: $nodeId, comment: $comment) {\n      nodeId\n    }\n  }\n"])));
      var QUERY_NODE_BY_ID = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  query MyNode($nodeId: String!) {\n    MyNode(nodeId: $nodeId) {\n      nodeId\n    }\n  }\n"])));
      var ADD_NODE_TO_GROUP = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  mutation AddNodeToGroup($nodeId: String!, $groupId: ID!) {\n    AddMyNodeGroup(from: { id: $groupId }, to: { nodeId: $nodeId }) {\n      to {\n        nodeId\n      }\n    }\n  }\n"])));
      var REMOVE_NODE_FROM_GROUP = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  mutation RemoveNodeToGroup($nodeId: String!, $groupId: ID!) {\n    RemoveMyNodeGroup(from: { id: $groupId }, to: { nodeId: $nodeId }) {\n      to {\n        nodeId\n      }\n    }\n  }\n"])));

      var CogniteITGService = /*#__PURE__*/function () {
        function CogniteITGService(graphqlClient) {
          _classCallCheck(this, CogniteITGService);

          this.graphqlClient = graphqlClient;
        }

        _createClass(CogniteITGService, [{
          key: "getGroups",
          value: function getGroups(modelId, revisionId, pollInterval) {
            return this.graphqlClient.watchQuery({
              query: QUERY_GROUPS,
              variables: {
                modelId: "".concat(modelId),
                revisionId: "".concat(revisionId)
              },
              pollInterval: pollInterval
            });
          }
        }, {
          key: "getGroup",
          value: function getGroup(groupId, pollInterval) {
            return this.graphqlClient.watchQuery({
              query: QUERY_GROUPS,
              variables: {
                groupId: groupId
              },
              pollInterval: pollInterval
            });
          }
        }, {
          key: "createGroup",
          value: function createGroup(modelId, revisionId, name) {
            return this.graphqlClient.mutate({
              mutation: CREATE_GROUP,
              variables: {
                modelId: "".concat(modelId),
                revisionId: "".concat(revisionId),
                name: name
              }
            });
          }
        }, {
          key: "deleteGroup",
          value: function deleteGroup(groupId) {
            return this.graphqlClient.mutate({
              mutation: DELETE_GROUP,
              variables: {
                groupId: groupId
              }
            });
          }
        }, {
          key: "addNodeToGroup",
          value: function addNodeToGroup(nodeId, groupId, comment) {
            var _this3 = this;

            return this.createNodeIfNotExists(nodeId, comment).subscribe(function () {
              return _this3.graphqlClient.mutate({
                mutation: ADD_NODE_TO_GROUP,
                variables: {
                  nodeId: "".concat(nodeId),
                  groupId: groupId
                }
              }).subscribe();
            });
          }
        }, {
          key: "removeNodeFromGroup",
          value: function removeNodeFromGroup(nodeId, groupId) {
            return this.graphqlClient.mutate({
              mutation: REMOVE_NODE_FROM_GROUP,
              variables: {
                nodeId: "".concat(nodeId),
                groupId: groupId
              }
            }).subscribe();
          }
        }, {
          key: "createNodeIfNotExists",
          value: function createNodeIfNotExists(nodeId, comment) {
            var _this4 = this;

            return this.graphqlClient.query({
              query: QUERY_NODE_BY_ID,
              variables: {
                nodeId: "".concat(nodeId)
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
              if (result.data.MyNode.length === 0) {
                return _this4.graphqlClient.mutate({
                  mutation: CREATE_NODE,
                  variables: {
                    nodeId: "".concat(nodeId),
                    comment: comment
                  }
                }).subscribe();
              }

              return result;
            }));
          }
        }]);

        return CogniteITGService;
      }();

      CogniteITGService.ɵfac = function CogniteITGService_Factory(t) {
        return new (t || CogniteITGService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      CogniteITGService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: CogniteITGService,
        factory: CogniteITGService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "E8X2":
    /*!*************************************************************************************************!*\
      !*** ./src/app/components/cognite-threed-node-details/cognite-threed-node-details.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: CogniteThreedNodeDetailsComponent */

    /***/
    function E8X2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CogniteThreedNodeDetailsComponent", function () {
        return CogniteThreedNodeDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_itg_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/itg-api.service */
      "DTTQ");
      /* harmony import */


      var src_app_cognite_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/cognite-api.service */
      "kN/+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");

      function CogniteThreedNodeDetailsComponent_mat_progress_spinner_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner");
        }
      }

      function CogniteThreedNodeDetailsComponent_div_2_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CogniteThreedNodeDetailsComponent_div_2_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.addNodeToGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Add to group ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.groupId === undefined);
        }
      }

      function CogniteThreedNodeDetailsComponent_div_2_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CogniteThreedNodeDetailsComponent_div_2_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.deleteNodeFromGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Remove from group ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.groupId === undefined);
        }
      }

      function CogniteThreedNodeDetailsComponent_div_2_p_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unable to add to group, please create/select a group first. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CogniteThreedNodeDetailsComponent_div_2_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CogniteThreedNodeDetailsComponent_div_2_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r15[0]);
        }
      }

      function CogniteThreedNodeDetailsComponent_div_2_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CogniteThreedNodeDetailsComponent_div_2_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r16[1]);
        }
      }

      function CogniteThreedNodeDetailsComponent_div_2_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
        }
      }

      function CogniteThreedNodeDetailsComponent_div_2_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
        }
      }

      var _c0 = function _c0() {
        return ["key", "value"];
      };

      function CogniteThreedNodeDetailsComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CogniteThreedNodeDetailsComponent_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.onClearSelection.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Cancel Node Selection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CogniteThreedNodeDetailsComponent_div_2_button_8_Template, 2, 1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CogniteThreedNodeDetailsComponent_div_2_button_9_Template, 2, 1, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CogniteThreedNodeDetailsComponent_div_2_p_10_Template, 2, 0, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Properties");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CogniteThreedNodeDetailsComponent_div_2_th_15_Template, 2, 0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CogniteThreedNodeDetailsComponent_div_2_td_16_Template, 2, 1, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CogniteThreedNodeDetailsComponent_div_2_th_18_Template, 2, 0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CogniteThreedNodeDetailsComponent_div_2_td_19_Template, 2, 1, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CogniteThreedNodeDetailsComponent_div_2_tr_20_Template, 1, 0, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CogniteThreedNodeDetailsComponent_div_2_tr_21_Template, 1, 0, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.node.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isInGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isInGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.groupId === undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r1.properties);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        }
      }

      var CogniteThreedNodeDetailsComponent = /*#__PURE__*/function () {
        function CogniteThreedNodeDetailsComponent(itgService, apiService) {
          _classCallCheck(this, CogniteThreedNodeDetailsComponent);

          this.itgService = itgService;
          this.apiService = apiService;
          this.onClearSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(CogniteThreedNodeDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.apiService.get3DModelNode(this.modelId, this.revisionId, this.nodeId).subscribe(function (nodes) {
              return _this5.node = nodes[0];
            });

            if (this.groupId) {
              this.itgService.getGroup(this.groupId).valueChanges.subscribe(function (res) {
                return _this5.group = res.data.MyGroup[0];
              });
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this6 = this;

            if (changes.nodeId && changes.nodeId.previousValue !== changes.nodeId.currentValue) {
              this.apiService.get3DModelNode(this.modelId, this.revisionId, this.nodeId).subscribe(function (nodes) {
                return _this6.node = nodes[0];
              });
            }

            if (changes.groupId && this.groupId) {
              this.itgService.getGroup(this.groupId).valueChanges.subscribe(function (res) {
                return _this6.group = res.data.MyGroup[0];
              });
            }
          }
        }, {
          key: "properties",
          get: function get() {
            return unflattenList(this.node.properties);
          }
        }, {
          key: "isInGroup",
          get: function get() {
            var _this7 = this;

            if (!this.group) {
              return false;
            }

            return this.group.nodes.some(function (el) {
              return el.nodeId === "".concat(_this7.nodeId);
            });
          }
        }, {
          key: "addNodeToGroup",
          value: function addNodeToGroup() {
            if (this.groupId) {
              this.itgService.addNodeToGroup(this.nodeId, this.groupId);
            }
          }
        }, {
          key: "deleteNodeFromGroup",
          value: function deleteNodeFromGroup() {
            if (this.groupId) {
              this.itgService.removeNodeFromGroup(this.nodeId, this.groupId);
            }
          }
        }]);

        return CogniteThreedNodeDetailsComponent;
      }();

      CogniteThreedNodeDetailsComponent.ɵfac = function CogniteThreedNodeDetailsComponent_Factory(t) {
        return new (t || CogniteThreedNodeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_itg_api_service__WEBPACK_IMPORTED_MODULE_1__["CogniteITGService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_cognite_api_service__WEBPACK_IMPORTED_MODULE_2__["CogniteApiService"]));
      };

      CogniteThreedNodeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CogniteThreedNodeDetailsComponent,
        selectors: [["app-cognite-threed-node-details"]],
        inputs: {
          modelId: "modelId",
          revisionId: "revisionId",
          nodeId: "nodeId",
          groupId: "groupId"
        },
        outputs: {
          onClearSelection: "onClearSelection"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 3,
        vars: 2,
        consts: [[1, "wrapper"], [4, "ngIf"], ["mat-button", "", 3, "click"], [2, "margin-top", "12px"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click", 4, "ngIf"], ["style", "margin-top: 12px", 4, "ngIf"], ["mat-table", "", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "key"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "value"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
        template: function CogniteThreedNodeDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CogniteThreedNodeDetailsComponent_mat_progress_spinner_1_Template, 1, 0, "mat-progress-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CogniteThreedNodeDetailsComponent_div_2_Template, 22, 9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.node === undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.node !== undefined);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2duaXRlLXRocmVlZC1ub2RlLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"]
      });

      var unflattenList = function unflattenList(obj, key) {
        return Object.entries(obj).reduce(function (prev, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              innerKey = _ref2[0],
              value = _ref2[1];

          var visibleKey = key ? "".concat(key, ".") : '';

          if (typeof value === 'object') {
            return prev.concat(unflattenList(value, "".concat(visibleKey).concat(innerKey)));
          }

          return prev.concat([["".concat(visibleKey).concat(innerKey), value]]);
        }, []);
      };
      /***/

    },

    /***/
    "R5rQ":
    /*!****************************************************!*\
      !*** ./src/app/page/login-page/login.component.ts ***!
      \****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function R5rQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _cognite_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../cognite-auth.service */
      "yPDM");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(cogniteAuthService) {
          _classCallCheck(this, LoginComponent);

          this.apiKey = localStorage.getItem('API_KEY') || '';
          this.cogniteAuthService = cogniteAuthService;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('API_KEY')) {
              this.onLogin();
            }
          }
        }, {
          key: "onLogin",
          value: function onLogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.cogniteAuthService.login(this.apiKey);

                    case 2:
                      localStorage.setItem('API_KEY', this.apiKey);
                      _context.next = 5;
                      return this.cogniteAuthService.getSdk().login.status();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cognite_auth_service__WEBPACK_IMPORTED_MODULE_2__["CogniteAuthService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 9,
        vars: 1,
        consts: [[1, "wrapper"], [2, "width", "400px"], ["matInput", "", "placeholder", "Ex. API key for `aize-dev` tenant", 3, "ngModel", "ngModelChange"], ["mat-button", "", 3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " * By default, if you have not deployed the schema in another tenant (see README.md for more info), the project is on `sample-cdf-graphql-angular-app` in the `aize-dev` tenant. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cognite API Key (aize-dev tenant by default*)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) {
              return ctx.apiKey = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_7_listener() {
              return ctx.onLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.apiKey);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
        styles: [".wrapper[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgcGFkZGluZzogMjRweDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "SHtQ":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/cognite-threed-viewer/cognite-threed-viewer.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: CogniteThreedViewerComponent */

    /***/
    function SHtQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CogniteThreedViewerComponent", function () {
        return CogniteThreedViewerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _cognite_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @cognite/reveal */
      "Pp2N");
      /* harmony import */


      var _cognite_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cognite_reveal__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_cognite_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/cognite-auth.service */
      "yPDM");
      /* harmony import */


      var src_app_itg_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/itg-api.service */
      "DTTQ"); // UPDATES TO FILE PLEASE REMEMBER TO UPDATE README


      var CogniteThreedViewerComponent = /*#__PURE__*/function () {
        function CogniteThreedViewerComponent(cogniteAuthService, // Not needed to load just the model.
        itgService) {
          _classCallCheck(this, CogniteThreedViewerComponent);

          this.cogniteAuthService = cogniteAuthService;
          this.itgService = itgService;
          this.onNodeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.visibleNodeIds = undefined;
          this.sdk = this.cogniteAuthService.getSdk();
        }
        /**
         * Runs when the component is initialized.
         *
         * Loads in the model and and sets a `onClick` that detects the location a click event has happened.
         */


        _createClass(CogniteThreedViewerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var domElement;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      domElement = document.getElementById('viewer'); // Instantiates the viewer

                      this.viewer = new _cognite_reveal__WEBPACK_IMPORTED_MODULE_2__["Cognite3DViewer"]({
                        sdk: this.sdk,
                        domElement: domElement
                      }); // Setup a click handler

                      this.viewer.on('click', this._onClick.bind(this)); // Add the model to the viewer.

                      this._addModelToViewer(this.modelId, this.revisionId);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (changes.revisionId && this.model) {
                        this._addModelToViewer(this.modelId, this.revisionId);
                      }

                      if (changes.selectedNodeId) {
                        this._highlightNodes(this.selectedNodeId, this.visibleNodeIds);
                      }

                      if (changes.visibleGroupId) {
                        if (this.visibleGroupId) {
                          this.itgService.getGroup(this.visibleGroupId).valueChanges.subscribe(function (res) {
                            _this8.visibleNodeIds = res.data.MyGroup[0].nodes.map(function (el) {
                              return el.nodeId;
                            });

                            if (_this8.visibleGroupId) {
                              _this8._highlightNodes(_this8.selectedNodeId, _this8.visibleNodeIds);
                            }
                          });
                        } else {
                          this.visibleNodeIds = undefined;

                          this._highlightNodes(this.selectedNodeId, this.visibleNodeIds);
                        }
                      }

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.viewer.dispose();
          }
          /**
           * Adds a model to the viewer
           *
           * @param modelId id of the model from CDF
           * @param revisionId id of the revision that you want for the model from CDF
           */

        }, {
          key: "_addModelToViewer",
          value: function _addModelToViewer(modelId, revisionId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!this.model) {
                        _context4.next = 3;
                        break;
                      }

                      _context4.next = 3;
                      return this.viewer.removeModel(this.model);

                    case 3:
                      _context4.next = 5;
                      return this.viewer.addModel({
                        modelId: modelId,
                        revisionId: revisionId
                      });

                    case 5:
                      this.model = _context4.sent;
                      // Load and use the initial camera associated with the model
                      this.viewer.loadCameraFromModel(this.model);

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
          /**
           * When a click occured in the viewer, this should be what handles it.
           *
           * @param param0 { offsetX, offsetY }
           */

        }, {
          key: "_onClick",
          value: function _onClick(_ref3) {
            var offsetX = _ref3.offsetX,
                offsetY = _ref3.offsetY;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var intersection, currentModel, treeIndex, nodeId;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!this.viewer) {
                        _context5.next = 12;
                        break;
                      }

                      _context5.next = 3;
                      return this.viewer.getIntersectionFromPixel(offsetX, offsetY);

                    case 3:
                      intersection = _context5.sent;

                      if (!intersection) {
                        _context5.next = 12;
                        break;
                      }

                      currentModel = intersection.model; // Get the treeIndex, which is the identifier for a node in a 3D tree

                      treeIndex = intersection.treeIndex; // Sadly the treeIndex is only used internally for the viewer - we need to next get the nodeId

                      _context5.next = 9;
                      return currentModel.mapTreeIndexToNodeId(treeIndex);

                    case 9:
                      nodeId = _context5.sent;
                      // Great, we have found the nodeId, lets use this
                      this.onNodeSelect.emit(nodeId);
                      this.selectedNodeId = nodeId;

                    case 12:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "_highlightNodes",
          value: function _highlightNodes(selectedNodeId, visibleNodeIds) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var currentModel, selectedTreeIndex, newNodeSet, visibleTreeIndexes, _newNodeSet;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!this.model) {
                        _context6.next = 19;
                        break;
                      }

                      currentModel = this.model; // Clear all existing node styles

                      currentModel.removeAllStyledNodeCollections(); // If theres a selection, draw pink box and make all colors for other nodes grey

                      if (!selectedNodeId) {
                        _context6.next = 12;
                        break;
                      }

                      _context6.next = 6;
                      return currentModel.mapNodeIdToTreeIndex(selectedNodeId);

                    case 6:
                      selectedTreeIndex = _context6.sent;
                      // In the new viewer, we have to set up a node set and apply a rule on it.
                      // Node set created
                      newNodeSet = new _cognite_reveal__WEBPACK_IMPORTED_MODULE_2__["TreeIndexNodeCollection"]([selectedTreeIndex]); // Adding style to everything NOT in the node set to make them grey

                      _context6.next = 10;
                      return currentModel.assignStyledNodeCollection(new _cognite_reveal__WEBPACK_IMPORTED_MODULE_2__["InvertedNodeCollection"](currentModel, newNodeSet), {
                        color: [100, 100, 100]
                      });

                    case 10:
                      _context6.next = 12;
                      return currentModel.assignStyledNodeCollection(newNodeSet, {
                        outlineColor: _cognite_reveal__WEBPACK_IMPORTED_MODULE_2__["NodeOutlineColor"].Red
                      });

                    case 12:
                      if (!visibleNodeIds) {
                        _context6.next = 19;
                        break;
                      }

                      _context6.next = 15;
                      return Promise.all(visibleNodeIds.map(function (id) {
                        return currentModel.mapNodeIdToTreeIndex(id);
                      }));

                    case 15:
                      visibleTreeIndexes = _context6.sent;
                      // In the new viewer, we have to set up a node set and apply a rule on it.
                      // Node set created
                      _newNodeSet = new _cognite_reveal__WEBPACK_IMPORTED_MODULE_2__["TreeIndexNodeCollection"](visibleTreeIndexes); // Adding style to everything NOT in the node set to make them ghosted (translucent)

                      currentModel.setDefaultNodeAppearance(_cognite_reveal__WEBPACK_IMPORTED_MODULE_2__["DefaultNodeAppearance"].Ghosted);
                      currentModel.assignStyledNodeCollection(_newNodeSet, _cognite_reveal__WEBPACK_IMPORTED_MODULE_2__["DefaultNodeAppearance"].Default);

                    case 19:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return CogniteThreedViewerComponent;
      }();

      CogniteThreedViewerComponent.ɵfac = function CogniteThreedViewerComponent_Factory(t) {
        return new (t || CogniteThreedViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cognite_auth_service__WEBPACK_IMPORTED_MODULE_3__["CogniteAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_itg_api_service__WEBPACK_IMPORTED_MODULE_4__["CogniteITGService"]));
      };

      CogniteThreedViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CogniteThreedViewerComponent,
        selectors: [["app-cognite-threed-viewer"]],
        inputs: {
          modelId: "modelId",
          revisionId: "revisionId",
          selectedNodeId: "selectedNodeId",
          visibleGroupId: "visibleGroupId"
        },
        outputs: {
          onNodeSelect: "onNodeSelect"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 0,
        consts: [["id", "viewer"]],
        template: function CogniteThreedViewerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
          }
        },
        styles: ["#viewer[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZ25pdGUtdGhyZWVkLXZpZXdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJjb2duaXRlLXRocmVlZC12aWV3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN2aWV3ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _cognite_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cognite-auth.service */
      "yPDM");
      /* harmony import */


      var _components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/top-bar/top-bar.component */
      "q1A0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _page_login_page_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./page/login-page/login.component */
      "R5rQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function AppComponent_app_login_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login");
        }
      }

      function AppComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AppComponent = function AppComponent(cogniteAuthService) {
        var _this9 = this;

        _classCallCheck(this, AppComponent);

        this.isLoggedIn = false;
        cogniteAuthService.loggedIn.subscribe(function (loggedIn) {
          return _this9.isLoggedIn = loggedIn;
        });
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cognite_auth_service__WEBPACK_IMPORTED_MODULE_1__["CogniteAuthService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 3,
        consts: [[3, "isLoggedIn"], [4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_login_1_Template, 1, 0, "app-login", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 0, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLoggedIn", ctx.isLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
          }
        },
        directives: [_components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__["TopBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _page_login_page_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
        styles: [".container[_ngcontent-%COMP%] {\r\n  margin: 24px;\r\n  flex: 1;\r\n  display: block;\r\n  overflow: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLE9BQU87RUFDUCxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7O0NBSUMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW46IDI0cHg7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vKlxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qL1xyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _graphql_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./graphql.module */
      "4KHl");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/top-bar/top-bar.component */
      "q1A0");
      /* harmony import */


      var _components_file_list_file_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/file-list/file-list.component */
      "mZx4");
      /* harmony import */


      var _components_cognite_models_list_cognite_models_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/cognite-models-list/cognite-models-list.component */
      "fqvs");
      /* harmony import */


      var _components_cognite_model_revisions_list_cognite_model_revisions_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/cognite-model-revisions-list/cognite-model-revisions-list.component */
      "2X+A");
      /* harmony import */


      var _page_threed_page_threed_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./page/threed-page/threed-page.component */
      "rpYY");
      /* harmony import */


      var _page_login_page_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./page/login-page/login.component */
      "R5rQ");
      /* harmony import */


      var _components_cognite_threed_viewer_cognite_threed_viewer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/cognite-threed-viewer/cognite-threed-viewer.component */
      "SHtQ");
      /* harmony import */


      var _components_itg_groups_list_itg_groups_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/itg-groups-list/itg-groups-list.component */
      "e8Tu");
      /* harmony import */


      var _components_itg_group_details_itg_group_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/itg-group-details/itg-group-details.component */
      "ZZJx");
      /* harmony import */


      var _components_cognite_threed_node_details_cognite_threed_node_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/cognite-threed-node-details/cognite-threed-node-details.component */
      "E8X2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([{
          path: '',
          component: _page_threed_page_threed_page_component__WEBPACK_IMPORTED_MODULE_22__["ThreedPageComponent"]
        }]), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_5__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_18__["TopBarComponent"], _page_login_page_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"], _components_file_list_file_list_component__WEBPACK_IMPORTED_MODULE_19__["FileListComponent"], _components_cognite_models_list_cognite_models_list_component__WEBPACK_IMPORTED_MODULE_20__["CogniteModelsListComponent"], _components_cognite_model_revisions_list_cognite_model_revisions_list_component__WEBPACK_IMPORTED_MODULE_21__["CogniteModelRevisionsListComponent"], _page_threed_page_threed_page_component__WEBPACK_IMPORTED_MODULE_22__["ThreedPageComponent"], _components_cognite_threed_viewer_cognite_threed_viewer_component__WEBPACK_IMPORTED_MODULE_24__["CogniteThreedViewerComponent"], _components_itg_groups_list_itg_groups_list_component__WEBPACK_IMPORTED_MODULE_25__["ItgGroupsListComponent"], _components_itg_groups_list_itg_groups_list_component__WEBPACK_IMPORTED_MODULE_25__["DialogOverviewExampleDialog"], _components_itg_group_details_itg_group_details_component__WEBPACK_IMPORTED_MODULE_26__["ItgGroupDetailsComponent"], _components_cognite_threed_node_details_cognite_threed_node_details_component__WEBPACK_IMPORTED_MODULE_27__["CogniteThreedNodeDetailsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_5__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZZJx":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/itg-group-details/itg-group-details.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ItgGroupDetailsComponent */

    /***/
    function ZZJx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItgGroupDetailsComponent", function () {
        return ItgGroupDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_itg_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/itg-api.service */
      "DTTQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function ItgGroupDetailsComponent_mat_progress_spinner_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner");
        }
      }

      function ItgGroupDetailsComponent_div_1_mat_list_item_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItgGroupDetailsComponent_div_1_mat_list_item_12_Template_mat_list_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var item_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r4.selectNode(item_r3.nodeId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID: ", item_r3.nodeId, "");
        }
      }

      function ItgGroupDetailsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItgGroupDetailsComponent_div_1_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Back to All Groups for Model ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItgGroupDetailsComponent_div_1_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onHighlightGroup.emit(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Toggle group visibility ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ItgGroupDetailsComponent_div_1_mat_list_item_12_Template, 4, 1, "mat-list-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Group: ", ctx_r1.group.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("3D Nodes in ", ctx_r1.group.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.group.nodes);
        }
      }

      var ItgGroupDetailsComponent = /*#__PURE__*/function () {
        function ItgGroupDetailsComponent(itgService) {
          _classCallCheck(this, ItgGroupDetailsComponent);

          this.itgService = itgService;
          this.onBackClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onNodeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.onHighlightGroup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ItgGroupDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.groupQuery = this.itgService.getGroup(this.groupId, 3000);
            this.groupQuery.valueChanges.subscribe(function (res) {
              return _this10.group = res.data.MyGroup[0];
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.onBackClicked.emit(true);
          }
        }, {
          key: "selectNode",
          value: function selectNode(nodeId) {
            this.onNodeClicked.emit(Number(nodeId));
          }
        }]);

        return ItgGroupDetailsComponent;
      }();

      ItgGroupDetailsComponent.ɵfac = function ItgGroupDetailsComponent_Factory(t) {
        return new (t || ItgGroupDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_itg_api_service__WEBPACK_IMPORTED_MODULE_1__["CogniteITGService"]));
      };

      ItgGroupDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ItgGroupDetailsComponent,
        selectors: [["app-itg-group-details"]],
        inputs: {
          groupId: "groupId"
        },
        outputs: {
          onBackClicked: "onBackClicked",
          onNodeClicked: "onNodeClicked",
          onHighlightGroup: "onHighlightGroup"
        },
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [2, "margin-top", "12px"], ["mat-ripple", "", "style", "cursor: pointer", 3, "click", 4, "ngFor", "ngForOf"], ["mat-ripple", "", 2, "cursor", "pointer", 3, "click"], ["matLine", ""]],
        template: function ItgGroupDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ItgGroupDetailsComponent_mat_progress_spinner_0_Template, 1, 0, "mat-progress-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItgGroupDetailsComponent_div_1_Template, 13, 3, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.group === undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.group !== undefined);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatLine"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGctZ3JvdXAtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "e8Tu":
    /*!*************************************************************************!*\
      !*** ./src/app/components/itg-groups-list/itg-groups-list.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ItgGroupsListComponent, DialogOverviewExampleDialog */

    /***/
    function e8Tu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItgGroupsListComponent", function () {
        return ItgGroupsListComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function () {
        return DialogOverviewExampleDialog;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_itg_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/itg-api.service */
      "DTTQ");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ItgGroupsListComponent_mat_list_item_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItgGroupsListComponent_mat_list_item_6_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var item_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.selectGroup(item_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItgGroupsListComponent_mat_list_item_6_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var item_r2 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.deleteGroup(item_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r2.name, " (", item_r2.nodes.length, " nodes) ");
        }
      }

      function ItgGroupsListComponent_p_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Groups Defined");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var ItgGroupsListComponent = /*#__PURE__*/function () {
        function ItgGroupsListComponent(itgService, dialog) {
          _classCallCheck(this, ItgGroupsListComponent);

          this.itgService = itgService;
          this.dialog = dialog;
          this.onSelectGroup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.groups = [];
        }

        _createClass(ItgGroupsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this._refetchList();

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (changes.revisionId.currentValue !== changes.revisionId.previousValue) {
                        this._refetchList();
                      }

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "_refetchList",
          value: function _refetchList() {
            var _this11 = this;

            this.groupsQuery = this.itgService.getGroups(this.modelId, this.revisionId, 5000);
            this.groupsQuery.valueChanges.subscribe(function (results) {
              _this11.groups = results.data.MyGroup;
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var _this12 = this;

            var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
              width: '40%'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              _this12.newGroupName = result;

              if (result) {
                _this12.itgService.createGroup(_this12.modelId, _this12.revisionId, result).subscribe(function () {
                  return _this12.groupsQuery.refetch();
                });
              }
            });
          }
        }, {
          key: "deleteGroup",
          value: function deleteGroup(groupId) {
            var _this13 = this;

            this.itgService.deleteGroup(groupId).subscribe(function () {
              return _this13.groupsQuery.refetch();
            });
          }
        }, {
          key: "selectGroup",
          value: function selectGroup(groupId) {
            this.onSelectGroup.emit(groupId);
            this.selectedGroupId = groupId;
          }
        }]);

        return ItgGroupsListComponent;
      }();

      ItgGroupsListComponent.ɵfac = function ItgGroupsListComponent_Factory(t) {
        return new (t || ItgGroupsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_itg_api_service__WEBPACK_IMPORTED_MODULE_3__["CogniteITGService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
      };

      ItgGroupsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ItgGroupsListComponent,
        selectors: [["app-itg-groups-list"]],
        inputs: {
          modelId: "modelId",
          revisionId: "revisionId",
          selectedGroupId: "selectedGroupId"
        },
        outputs: {
          onSelectGroup: "onSelectGroup"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 8,
        vars: 2,
        consts: [[1, "wrapper"], ["mat-raised-button", "", 3, "click"], ["matRipple", "", "class", "item", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matRipple", "", 1, "item"], ["mat-line", "", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"]],
        template: function ItgGroupsListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "All Saved Groups in ITG for this model");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItgGroupsListComponent_Template_button_click_3_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Create Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ItgGroupsListComponent_mat_list_item_6_Template, 7, 2, "mat-list-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ItgGroupsListComponent_p_7_Template, 2, 0, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.groups);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groups.length === 0);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatLine"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
        styles: [".item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0Zy1ncm91cHMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJpdGctZ3JvdXBzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"]
      });

      var DialogOverviewExampleDialog = /*#__PURE__*/function () {
        function DialogOverviewExampleDialog(dialogRef, name) {
          _classCallCheck(this, DialogOverviewExampleDialog);

          this.dialogRef = dialogRef;
          this.name = name;
        }

        _createClass(DialogOverviewExampleDialog, [{
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "onYesClick",
          value: function onYesClick() {}
        }]);

        return DialogOverviewExampleDialog;
      }();

      DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) {
        return new (t || DialogOverviewExampleDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      DialogOverviewExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DialogOverviewExampleDialog,
        selectors: [["dialog-overview-example-dialog"]],
        decls: 14,
        vars: 2,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", "color", "primary", 3, "mat-dialog-close"]],
        template: function DialogOverviewExampleDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add a new Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Give a name for a new group, you can store all relevant 3d nodes for a model within a group. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "New Group Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DialogOverviewExampleDialog_Template_input_ngModelChange_8_listener($event) {
              return ctx.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogOverviewExampleDialog_Template_button_click_10_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Ok ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", ctx.name);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "fqvs":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/cognite-models-list/cognite-models-list.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: CogniteModelsListComponent */

    /***/
    function fqvs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CogniteModelsListComponent", function () {
        return CogniteModelsListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _cognite_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../cognite-api.service */
      "kN/+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _cognite_model_revisions_list_cognite_model_revisions_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../cognite-model-revisions-list/cognite-model-revisions-list.component */
      "2X+A");

      function CogniteModelsListComponent_mat_list_3_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Revisions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-cognite-model-revisions-list", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("newRevisionId", function CogniteModelsListComponent_mat_list_3_div_5_Template_app_cognite_model_revisions_list_newRevisionId_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r3.onRevisionSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modelId", ctx_r2.selectedModel);
        }
      }

      function CogniteModelsListComponent_mat_list_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function CogniteModelsListComponent_mat_list_3_Template_mat_expansion_panel_opened_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var item_r1 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onModelSelected(item_r1.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CogniteModelsListComponent_mat_list_3_div_5_Template, 4, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", item_r1.id === ctx_r0.selectedModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedModel === item_r1.id);
        }
      }

      var CogniteModelsListComponent = /*#__PURE__*/function () {
        function CogniteModelsListComponent(cogniteApiService) {
          _classCallCheck(this, CogniteModelsListComponent);

          this.cogniteApiService = cogniteApiService;
          this.loading = true;
          this.onModelAndRevision = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.models = [];
        }

        _createClass(CogniteModelsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.cogniteApiService.get3DModels().subscribe(function (result) {
              _this14.models = result;
            });
          }
        }, {
          key: "onModelSelected",
          value: function onModelSelected(newSelectedModelId) {
            if (newSelectedModelId === this.selectedModel) {
              this.selectedModel = undefined;
              this.selectedRevision = undefined;
            } else {
              this.selectedModel = newSelectedModelId;
              this.selectedRevision = undefined;
            }
          }
        }, {
          key: "onRevisionSelected",
          value: function onRevisionSelected(newRevisionId) {
            if (newRevisionId === this.selectedRevision) {
              this.selectedRevision = undefined;
              this.onModelAndRevision.emit(undefined);
            } else {
              this.selectedRevision = newRevisionId;
              this.onModelAndRevision.emit({
                modelId: this.selectedModel,
                revisionId: this.selectedRevision
              });
            }
          }
        }]);

        return CogniteModelsListComponent;
      }();

      CogniteModelsListComponent.ɵfac = function CogniteModelsListComponent_Factory(t) {
        return new (t || CogniteModelsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cognite_api_service__WEBPACK_IMPORTED_MODULE_1__["CogniteApiService"]));
      };

      CogniteModelsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CogniteModelsListComponent,
        selectors: [["app-cognite-models-list"]],
        outputs: {
          onModelAndRevision: "onModelAndRevision"
        },
        decls: 4,
        vars: 1,
        consts: [[4, "ngFor", "ngForOf"], ["hideToggle", "", 3, "expanded", "opened"], [4, "ngIf"], [3, "modelId", "newRevisionId"]],
        template: function CogniteModelsListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "3D Models");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CogniteModelsListComponent_mat_list_3_Template, 6, 3, "mat-list", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.models);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _cognite_model_revisions_list_cognite_model_revisions_list_component__WEBPACK_IMPORTED_MODULE_5__["CogniteModelRevisionsListComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2duaXRlLW1vZGVscy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "kN/+":
    /*!****************************************!*\
      !*** ./src/app/cognite-api.service.ts ***!
      \****************************************/

    /*! exports provided: CogniteApiService */

    /***/
    function kN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CogniteApiService", function () {
        return CogniteApiService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "41Ph");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _cognite_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cognite-auth.service */
      "yPDM");

      var CogniteApiService = /*#__PURE__*/function () {
        function CogniteApiService(cogniteAuthService) {
          _classCallCheck(this, CogniteApiService);

          this.cogniteAuthService = cogniteAuthService;
        }

        _createClass(CogniteApiService, [{
          key: "get3DModels",
          value: function get3DModels() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.cogniteAuthService.getSdk().models3D.list({
              limit: 1000
            }).autoPagingToArray());
          }
        }, {
          key: "get3DModelRevisions",
          value: function get3DModelRevisions(modelId) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.cogniteAuthService.getSdk().revisions3D.list(modelId, {
              limit: 1000
            }).autoPagingToArray());
          }
        }, {
          key: "get3DModelNode",
          value: function get3DModelNode(modelId, revisionId, nodeId) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(this.cogniteAuthService.getSdk().viewer3D.listRevealNodes3D(modelId, revisionId, {
              nodeId: nodeId,
              limit: 1
            }).autoPagingToArray());
          }
        }]);

        return CogniteApiService;
      }();

      CogniteApiService.ɵfac = function CogniteApiService_Factory(t) {
        return new (t || CogniteApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_cognite_auth_service__WEBPACK_IMPORTED_MODULE_2__["CogniteAuthService"]));
      };

      CogniteApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CogniteApiService,
        factory: CogniteApiService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "mZx4":
    /*!*************************************************************!*\
      !*** ./src/app/components/file-list/file-list.component.ts ***!
      \*************************************************************/

    /*! exports provided: FileListComponent */

    /***/
    function mZx4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileListComponent", function () {
        return FileListComponent;
      });
      /* harmony import */


      var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! apollo-angular */
      "/IUn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FileListComponent = /*#__PURE__*/function () {
        function FileListComponent(apollo) {
          _classCallCheck(this, FileListComponent);

          this.apollo = apollo;
          this.loading = true;
        }

        _createClass(FileListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.apollo.watchQuery({
              query: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"](_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n          {\n            MyFavorite {\n              fileId\n            }\n          }\n        "])))
            }).valueChanges.subscribe(function (result) {
              _this15.loading = result.loading;
              _this15.error = result.error;
              _this15.favourites = result.data.MyFavorite;
            });
          }
        }]);

        return FileListComponent;
      }();

      FileListComponent.ɵfac = function FileListComponent_Factory(t) {
        return new (t || FileListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_0__["Apollo"]));
      };

      FileListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FileListComponent,
        selectors: [["app-file-list"]],
        decls: 2,
        vars: 0,
        template: function FileListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "file-list works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "q1A0":
    /*!*********************************************************!*\
      !*** ./src/app/components/top-bar/top-bar.component.ts ***!
      \*********************************************************/

    /*! exports provided: TopBarComponent */

    /***/
    function q1A0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
        return TopBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/"];
      };

      function TopBarComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "3D Demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function TopBarComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var TopBarComponent = /*#__PURE__*/function () {
        function TopBarComponent() {
          _classCallCheck(this, TopBarComponent);
        }

        _createClass(TopBarComponent, [{
          key: "logout",
          value: function logout() {
            localStorage.clear();
            window.location.href = window.location.href;
          }
        }]);

        return TopBarComponent;
      }();

      TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
        return new (t || TopBarComponent)();
      };

      TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TopBarComponent,
        selectors: [["app-top-bar"]],
        inputs: {
          isLoggedIn: "isLoggedIn"
        },
        decls: 6,
        vars: 2,
        consts: [[2, "margin-right", "40px"], ["mat-button", "", 3, "routerLink", 4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "routerLink"], ["mat-button", "", 3, "click"]],
        template: function TopBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CDF Resource <-> ITG Demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopBarComponent_button_4_Template, 2, 2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TopBarComponent_button_5_Template, 2, 0, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7O0NBSUMiLCJmaWxlIjoidG9wLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKlxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qLyJdfQ== */"]
      });
      /***/
    },

    /***/
    "rpYY":
    /*!***********************************************************!*\
      !*** ./src/app/page/threed-page/threed-page.component.ts ***!
      \***********************************************************/

    /*! exports provided: ThreedPageComponent */

    /***/
    function rpYY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThreedPageComponent", function () {
        return ThreedPageComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "9YHx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_cognite_models_list_cognite_models_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/cognite-models-list/cognite-models-list.component */
      "fqvs");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_cognite_threed_viewer_cognite_threed_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/cognite-threed-viewer/cognite-threed-viewer.component */
      "SHtQ");
      /* harmony import */


      var _components_itg_groups_list_itg_groups_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/itg-groups-list/itg-groups-list.component */
      "e8Tu");
      /* harmony import */


      var _components_itg_group_details_itg_group_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/itg-group-details/itg-group-details.component */
      "ZZJx");
      /* harmony import */


      var _components_cognite_threed_node_details_cognite_threed_node_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/cognite-threed-node-details/cognite-threed-node-details.component */
      "E8X2");

      function ThreedPageComponent_p_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Select a 3D Model + Revision to preview it ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ThreedPageComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-cognite-threed-viewer", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onNodeSelect", function ThreedPageComponent_div_5_Template_app_cognite_threed_viewer_onNodeSelect_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.setActiveNode($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modelId", ctx_r1.activeRevision.modelId)("revisionId", ctx_r1.activeRevision.revisionId)("selectedNodeId", ctx_r1.activeNodeId)("visibleGroupId", ctx_r1.isGroupHightlighted ? ctx_r1.activeGroupId : undefined);
        }
      }

      function ThreedPageComponent_div_6_app_itg_groups_list_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-itg-groups-list", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelectGroup", function ThreedPageComponent_div_6_app_itg_groups_list_2_Template_app_itg_groups_list_onSelectGroup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r9.setActiveGroup($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modelId", ctx_r5.activeRevision.modelId)("revisionId", ctx_r5.activeRevision.revisionId);
        }
      }

      function ThreedPageComponent_div_6_app_itg_group_details_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-itg-group-details", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onBackClicked", function ThreedPageComponent_div_6_app_itg_group_details_3_Template_app_itg_group_details_onBackClicked_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r11.setActiveGroup(undefined);
          })("onNodeClicked", function ThreedPageComponent_div_6_app_itg_group_details_3_Template_app_itg_group_details_onNodeClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r13.setActiveNode($event);
          })("onHighlightGroup", function ThreedPageComponent_div_6_app_itg_group_details_3_Template_app_itg_group_details_onHighlightGroup_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r14.toggleShowVisibleNodes();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("groupId", ctx_r6.activeGroupId);
        }
      }

      function ThreedPageComponent_div_6_app_cognite_threed_node_details_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-cognite-threed-node-details", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClearSelection", function ThreedPageComponent_div_6_app_cognite_threed_node_details_5_Template_app_cognite_threed_node_details_onClearSelection_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r15.setActiveNode(undefined);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modelId", ctx_r7.activeRevision.modelId)("revisionId", ctx_r7.activeRevision.revisionId)("nodeId", ctx_r7.activeNodeId)("groupId", ctx_r7.activeGroupId);
        }
      }

      function ThreedPageComponent_div_6_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select a node to see the details");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ThreedPageComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ThreedPageComponent_div_6_app_itg_groups_list_2_Template, 1, 2, "app-itg-groups-list", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ThreedPageComponent_div_6_app_itg_group_details_3_Template, 1, 1, "app-itg-group-details", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ThreedPageComponent_div_6_app_cognite_threed_node_details_5_Template, 1, 4, "app-cognite-threed-node-details", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ThreedPageComponent_div_6_div_6_Template, 3, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.activeGroupId === undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.activeGroupId !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.activeNodeId !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.activeNodeId === undefined);
        }
      }

      var ThreedPageComponent = /*#__PURE__*/function () {
        function ThreedPageComponent(router, route) {
          _classCallCheck(this, ThreedPageComponent);

          this.router = router;
          this.route = route;
          this.isGroupHightlighted = false;
        }

        _createClass(ThreedPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            var _this$router$parseUrl = this.router.parseUrl(this.router.url),
                queryParams = _this$router$parseUrl.queryParams;

            if (queryParams.modelId && queryParams.revisionId) {
              this.activeRevision = {
                modelId: Number(queryParams.modelId),
                revisionId: Number(queryParams.revisionId)
              };
            }

            this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (params) {
              if (params.get('revisionId')) {
                _this16.activeRevision = {
                  revisionId: Number(params.get('revisionId')),
                  modelId: Number(params.get('modelId'))
                };
              }
            }));
          }
        }, {
          key: "setActiveRevision",
          value: function setActiveRevision(newRevision) {
            this.activeRevision = newRevision;
            this.router.navigate([], {
              queryParams: newRevision,
              queryParamsHandling: 'merge'
            });
            this.activeGroupId = undefined;
            this.activeNodeId = undefined;
          }
        }, {
          key: "setActiveGroup",
          value: function setActiveGroup(newGroupId) {
            this.activeGroupId = newGroupId;
          }
        }, {
          key: "setActiveNode",
          value: function setActiveNode(nodeId) {
            this.activeNodeId = nodeId;
          }
        }, {
          key: "toggleShowVisibleNodes",
          value: function toggleShowVisibleNodes() {
            this.isGroupHightlighted = !this.isGroupHightlighted;
          }
        }]);

        return ThreedPageComponent;
      }();

      ThreedPageComponent.ɵfac = function ThreedPageComponent_Factory(t) {
        return new (t || ThreedPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      ThreedPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ThreedPageComponent,
        selectors: [["app-threed-page"]],
        inputs: {
          activeRevision: "activeRevision",
          activeNodeId: "activeNodeId",
          activeGroupId: "activeGroupId",
          isGroupHightlighted: "isGroupHightlighted"
        },
        decls: 7,
        vars: 3,
        consts: [[1, "wrapper"], [1, "left"], [3, "onModelAndRevision"], [1, "right"], [4, "ngIf"], ["class", "viewer", 4, "ngIf"], ["class", "details", 4, "ngIf"], [1, "viewer"], [3, "modelId", "revisionId", "selectedNodeId", "visibleGroupId", "onNodeSelect"], [1, "details"], [3, "modelId", "revisionId", "onSelectGroup", 4, "ngIf"], [3, "groupId", "onBackClicked", "onNodeClicked", "onHighlightGroup", 4, "ngIf"], [1, "node-preview"], [3, "modelId", "revisionId", "nodeId", "groupId", "onClearSelection", 4, "ngIf"], [3, "modelId", "revisionId", "onSelectGroup"], [3, "groupId", "onBackClicked", "onNodeClicked", "onHighlightGroup"], [3, "modelId", "revisionId", "nodeId", "groupId", "onClearSelection"]],
        template: function ThreedPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-cognite-models-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onModelAndRevision", function ThreedPageComponent_Template_app_cognite_models_list_onModelAndRevision_2_listener($event) {
              return ctx.setActiveRevision($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ThreedPageComponent_p_4_Template, 2, 0, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ThreedPageComponent_div_5_Template, 2, 4, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ThreedPageComponent_div_6_Template, 7, 4, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeRevision === undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeRevision !== undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeRevision !== undefined);
          }
        },
        directives: [_components_cognite_models_list_cognite_models_list_component__WEBPACK_IMPORTED_MODULE_3__["CogniteModelsListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_cognite_threed_viewer_cognite_threed_viewer_component__WEBPACK_IMPORTED_MODULE_5__["CogniteThreedViewerComponent"], _components_itg_groups_list_itg_groups_list_component__WEBPACK_IMPORTED_MODULE_6__["ItgGroupsListComponent"], _components_itg_group_details_itg_group_details_component__WEBPACK_IMPORTED_MODULE_7__["ItgGroupDetailsComponent"], _components_cognite_threed_node_details_cognite_threed_node_details_component__WEBPACK_IMPORTED_MODULE_8__["CogniteThreedNodeDetailsComponent"]],
        styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  height: 100%;\n}\n.wrapper[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  width: 360px;\n  overflow: auto;\n  padding: 6px;\n  margin-top: -6px;\n}\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .viewer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  width: 420px;\n  display: flex;\n  flex-direction: column;\n}\n.wrapper[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.node-preview[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  border-top: 1px solid grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRocmVlZC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsT0FBTztFQUNQLGFBQWE7QUFDZjtBQUVBO0VBQ0UsT0FBTztBQUNUO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsT0FBTztFQUNQLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InRocmVlZC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbn1cbi53cmFwcGVyIC5sZWZ0IHtcbiAgd2lkdGg6IDM2MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogNnB4O1xuICBtYXJnaW4tdG9wOiAtNnB4O1xufVxuLndyYXBwZXIgLnJpZ2h0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLndyYXBwZXIgLnJpZ2h0IC52aWV3ZXIge1xuICBmbGV4OiAxO1xufVxuLndyYXBwZXIgLnJpZ2h0IC5kZXRhaWxzIHtcbiAgd2lkdGg6IDQyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ud3JhcHBlciAucmlnaHQgLmRldGFpbHMgPiBkaXYge1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuLm5vZGUtcHJldmlldyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JleTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "yPDM":
    /*!*****************************************!*\
      !*** ./src/app/cognite-auth.service.ts ***!
      \*****************************************/

    /*! exports provided: CogniteAuthService */

    /***/
    function yPDM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CogniteAuthService", function () {
        return CogniteAuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _cognite_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @cognite/sdk */
      "hPua");
      /* harmony import */


      var _cognite_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cognite_sdk__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! axios */
      "vDqi");
      /* harmony import */


      var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "41Ph");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CogniteAuthService = /*#__PURE__*/function () {
        function CogniteAuthService() {
          _classCallCheck(this, CogniteAuthService);

          this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
          this.sdk = new _cognite_sdk__WEBPACK_IMPORTED_MODULE_1__["CogniteClient"]({
            appId: 'sample-cdf-graphql-angular-app'
          });
        }

        _createClass(CogniteAuthService, [{
          key: "getSdk",
          value: function getSdk() {
            return this.sdk;
          }
        }, {
          key: "login",
          value: function login(apikey) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var response;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://api.cognitedata.com/login/status', {
                        headers: {
                          'api-key': apikey
                        }
                      });

                    case 2:
                      response = _context9.sent;
                      // Login with the APIKEY.
                      this.sdk.loginWithApiKey({
                        apiKey: apikey,
                        project: response.data.data.project
                      });
                      this.loggedIn.next(true);

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.sdk = new _cognite_sdk__WEBPACK_IMPORTED_MODULE_1__["CogniteClient"]({
                        appId: 'sample-cdf-graphql-angular-app'
                      });

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }]);

        return CogniteAuthService;
      }();

      CogniteAuthService.ɵfac = function CogniteAuthService_Factory(t) {
        return new (t || CogniteAuthService)();
      };

      CogniteAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: CogniteAuthService,
        factory: CogniteAuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /*
      Copyright Google LLC. All Rights Reserved.
      Use of this source code is governed by an MIT-style license that
      can be found in the LICENSE file at https://angular.io/license
      */

      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map