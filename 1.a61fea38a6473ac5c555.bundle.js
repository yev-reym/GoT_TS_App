(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../src/components/BookList/index.tsx":
/*!********************************************!*\
  !*** ../src/components/BookList/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/Loader */ "../src/components/Loader/index.tsx");
/* harmony import */ var _contexts_BookContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/BookContext */ "../src/contexts/BookContext.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "../src/hooks/index.tsx");
/* harmony import */ var Utils___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Utils/ */ "../src/utils/index.ts");





const BookList = () => {
    const [sort, changeSort] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Oldest');
    const [query, setQuery] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
    const { loading, error, books = {}, bindedActions } = Object(_contexts_BookContext__WEBPACK_IMPORTED_MODULE_2__["useBookContext"])();
    if (loading && !books[sort]) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], null);
    }
    console.log('books', books);
    Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useFetchGoTData"])(query, bindedActions, Utils___WEBPACK_IMPORTED_MODULE_4__["fetchRequest"]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        setQuery('books?pageSize=12');
    }, []);
    // const renderBooks = (books: ): JSX.Element[] => {
    //         return books.map((book,idx) => {
    //             return <li key={idx}><BookItem book={book} /></li>
    //         });
    // }
    // const renderError = error ? (
    //   <span>We are experiencing technical difficulties, we apologize!</span>
    // ) : null
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "booklist-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "sorter", htmlFor: "sorts" }, "Sort By:"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", { id: "sorts", name: "sorts", onChange: (e) => changeSort(e.target.value), value: sort },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: "Oldest" }, "Oldest"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: "Newest" }, "Newest"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: "Most Pages" }, "Most Pages"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", { value: "Least Pages" }, "Least Pages"))));
};
/* harmony default export */ __webpack_exports__["default"] = (BookList);


/***/ }),

/***/ "../src/hooks/index.tsx":
/*!******************************!*\
  !*** ../src/hooks/index.tsx ***!
  \******************************/
/*! exports provided: useInfoToggle, useFetchGoTData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInfoToggle", function() { return useInfoToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchGoTData", function() { return useFetchGoTData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// Toggle hook to pass state for drilldowns
const useInfoToggle = (defaultState = false) => {
    const [toggleState, setToggleTo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultState);
    const toggleAction = {
        // If no value is passed to switch toggle, we default to toggling to opposite of current state
        toggleTo: (toggle) => setToggleTo(toggle !== null && toggle !== void 0 ? toggle : !toggleState),
    };
    return [toggleState, toggleAction];
};
// Custom fetch hook that caches url requests
const useFetchGoTData = (query, dispatchBindedActions, getRequest) => {
    const requestsCache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const { fetchDispatchAction, successDispatchAction, failureDispatchAction, } = dispatchBindedActions;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        // Set boolean var which will check for unmounting
        // If unmounted before side request is complete, we cancel the state update to prevent
        // React state change errors
        if (!query)
            return;
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            fetchDispatchAction();
            console.log('dispatched');
            if (requestsCache.current[query]) {
                const data = requestsCache.current[query];
                successDispatchAction(data);
            }
            else {
                try {
                    console.log('request', query);
                    const response = yield getRequest(query);
                    console.log('response', response);
                    const data = yield response.data;
                    requestsCache.current[query] = data;
                    successDispatchAction(data);
                }
                catch (error) {
                    failureDispatchAction(error.message);
                }
            }
        });
        fetchData();
    }, [query]);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2NvbXBvbmVudHMvQm9va0xpc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uLi9zcmMvaG9va3MvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNaO0FBQ3FCO0FBQ2Q7QUFDUjtBQUlyQyxNQUFNLFFBQVEsR0FBNEIsR0FBZ0IsRUFBRTtJQUMxRCxNQUFNLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxHQUFHLHNEQUFRLENBQVMsUUFBUSxDQUFDO0lBQ3JELE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsc0RBQVEsQ0FBUyxFQUFFLENBQUM7SUFDOUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxhQUFhLEVBQUUsR0FBRyw0RUFBYyxFQUFFO0lBRXRFLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzNCLE9BQU8sMkRBQUMseURBQU0sT0FBRztLQUNsQjtJQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztJQUUzQiw4REFBZSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsbURBQVksQ0FBQztJQUVuRCx1REFBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztJQUMvQixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4sb0RBQW9EO0lBQ3BELDJDQUEyQztJQUMzQyxpRUFBaUU7SUFDakUsY0FBYztJQUNkLElBQUk7SUFFSixnQ0FBZ0M7SUFDaEMsMkVBQTJFO0lBQzNFLFdBQVc7SUFFWCxPQUFPLENBQ0wsb0VBQUssU0FBUyxFQUFDLG9CQUFvQjtRQUNqQyxzRUFBTyxTQUFTLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxPQUFPLGVBRWpDO1FBQ1IsdUVBQ0UsRUFBRSxFQUFDLE9BQU8sRUFDVixJQUFJLEVBQUMsT0FBTyxFQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQzNDLEtBQUssRUFBRSxJQUFJO1lBRVgsdUVBQVEsS0FBSyxFQUFDLFFBQVEsYUFBZ0I7WUFDdEMsdUVBQVEsS0FBSyxFQUFDLFFBQVEsYUFBZ0I7WUFDdEMsdUVBQVEsS0FBSyxFQUFDLFlBQVksaUJBQW9CO1lBQzlDLHVFQUFRLEtBQUssRUFBQyxhQUFhLGtCQUFxQixDQUN6QyxDQUdMLENBQ1A7QUFDSCxDQUFDO0FBRWMsdUVBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEbUM7QUFFMUQsMkNBQTJDO0FBQ3BDLE1BQU0sYUFBYSxHQUFHLENBQUMsWUFBWSxHQUFHLEtBQUssRUFBRSxFQUFFO0lBQ3BELE1BQU0sQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLEdBQUcsc0RBQVEsQ0FBVSxZQUFZLENBQUM7SUFFbEUsTUFBTSxZQUFZLEdBQUc7UUFDbkIsOEZBQThGO1FBQzlGLFFBQVEsRUFBRSxDQUFDLE1BQWdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLGFBQU4sTUFBTSxjQUFOLE1BQU0sR0FBSSxDQUFDLFdBQVcsQ0FBQztLQUNwRTtJQUNELE9BQU8sQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFVO0FBQzdDLENBQUM7QUFJRCw2Q0FBNkM7QUFDdEMsTUFBTSxlQUFlLEdBQUcsQ0FDN0IsS0FBYSxFQUNiLHFCQUEwQixFQUMxQixVQUE0QixFQUM1QixFQUFFO0lBQ0YsTUFBTSxhQUFhLEdBQWtDLG9EQUFNLENBQUMsRUFBRSxDQUFDO0lBRS9ELE1BQU0sRUFDSixtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLHFCQUFxQixHQUN0QixHQUFHLHFCQUFxQjtJQUV6Qix1REFBUyxDQUFDLEdBQUcsRUFBRTtRQUNiLGtEQUFrRDtRQUNsRCxzRkFBc0Y7UUFDdEYsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTTtRQUVsQixNQUFNLFNBQVMsR0FBRyxHQUFTLEVBQUU7WUFDM0IsbUJBQW1CLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDekIsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNoQyxNQUFNLElBQUksR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDekMscUJBQXFCLENBQUMsSUFBSSxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLElBQUk7b0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO29CQUM3QixNQUFNLFFBQVEsR0FBRyxNQUFNLFVBQVUsQ0FBQyxLQUFLLENBQUM7b0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQztvQkFDakMsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSTtvQkFFaEMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJO29CQUVuQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7aUJBQzVCO2dCQUFDLE9BQU8sS0FBSyxFQUFFO29CQUNkLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7aUJBQ3JDO2FBQ0Y7UUFDSCxDQUFDO1FBRUQsU0FBUyxFQUFFO0lBRWIsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDYixDQUFDIiwiZmlsZSI6IjEuYTYxZmVhMzhhNjQ3M2FjNWM1NTUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMb2FkZXIgZnJvbSAnQ29tcG9uZW50cy9Mb2FkZXInXG5pbXBvcnQgeyB1c2VCb29rQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL0Jvb2tDb250ZXh0J1xuaW1wb3J0IHsgdXNlRmV0Y2hHb1REYXRhIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgeyBmZXRjaFJlcXVlc3QgfSBmcm9tICdVdGlscy8nXG5cbmludGVyZmFjZSBCb29rTGlzdFByb3BzIHt9XG5cbmNvbnN0IEJvb2tMaXN0OiBSZWFjdC5GQzxCb29rTGlzdFByb3BzPiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFtzb3J0LCBjaGFuZ2VTb3J0XSA9IHVzZVN0YXRlPHN0cmluZz4oJ09sZGVzdCcpXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGU8c3RyaW5nPignJylcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgYm9va3MgPSB7fSwgYmluZGVkQWN0aW9ucyB9ID0gdXNlQm9va0NvbnRleHQoKVxuXG4gIGlmIChsb2FkaW5nICYmICFib29rc1tzb3J0XSkge1xuICAgIHJldHVybiA8TG9hZGVyIC8+XG4gIH1cbiAgY29uc29sZS5sb2coJ2Jvb2tzJywgYm9va3MpXG5cbiAgdXNlRmV0Y2hHb1REYXRhKHF1ZXJ5LCBiaW5kZWRBY3Rpb25zLCBmZXRjaFJlcXVlc3QpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRRdWVyeSgnYm9va3M/cGFnZVNpemU9MTInKVxuICB9LCBbXSlcblxuICAvLyBjb25zdCByZW5kZXJCb29rcyA9IChib29rczogKTogSlNYLkVsZW1lbnRbXSA9PiB7XG4gIC8vICAgICAgICAgcmV0dXJuIGJvb2tzLm1hcCgoYm9vayxpZHgpID0+IHtcbiAgLy8gICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2lkeH0+PEJvb2tJdGVtIGJvb2s9e2Jvb2t9IC8+PC9saT5cbiAgLy8gICAgICAgICB9KTtcbiAgLy8gfVxuXG4gIC8vIGNvbnN0IHJlbmRlckVycm9yID0gZXJyb3IgPyAoXG4gIC8vICAgPHNwYW4+V2UgYXJlIGV4cGVyaWVuY2luZyB0ZWNobmljYWwgZGlmZmljdWx0aWVzLCB3ZSBhcG9sb2dpemUhPC9zcGFuPlxuICAvLyApIDogbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib29rbGlzdC1jb250YWluZXJcIj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzb3J0ZXJcIiBodG1sRm9yPVwic29ydHNcIj5cbiAgICAgICAgU29ydCBCeTpcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGlkPVwic29ydHNcIlxuICAgICAgICBuYW1lPVwic29ydHNcIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZVNvcnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICB2YWx1ZT17c29ydH1cbiAgICAgID5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk9sZGVzdFwiPk9sZGVzdDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTmV3ZXN0XCI+TmV3ZXN0PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJNb3N0IFBhZ2VzXCI+TW9zdCBQYWdlczwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTGVhc3QgUGFnZXNcIj5MZWFzdCBQYWdlczwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwiYm9vay1saXN0XCI+e3JlbmRlckJvb2tzKCl9PC91bD4gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9va0xpc3RcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcblxuLy8gVG9nZ2xlIGhvb2sgdG8gcGFzcyBzdGF0ZSBmb3IgZHJpbGxkb3duc1xuZXhwb3J0IGNvbnN0IHVzZUluZm9Ub2dnbGUgPSAoZGVmYXVsdFN0YXRlID0gZmFsc2UpID0+IHtcbiAgY29uc3QgW3RvZ2dsZVN0YXRlLCBzZXRUb2dnbGVUb10gPSB1c2VTdGF0ZTxib29sZWFuPihkZWZhdWx0U3RhdGUpXG5cbiAgY29uc3QgdG9nZ2xlQWN0aW9uID0ge1xuICAgIC8vIElmIG5vIHZhbHVlIGlzIHBhc3NlZCB0byBzd2l0Y2ggdG9nZ2xlLCB3ZSBkZWZhdWx0IHRvIHRvZ2dsaW5nIHRvIG9wcG9zaXRlIG9mIGN1cnJlbnQgc3RhdGVcbiAgICB0b2dnbGVUbzogKHRvZ2dsZT86IGJvb2xlYW4pID0+IHNldFRvZ2dsZVRvKHRvZ2dsZSA/PyAhdG9nZ2xlU3RhdGUpLFxuICB9XG4gIHJldHVybiBbdG9nZ2xlU3RhdGUsIHRvZ2dsZUFjdGlvbl0gYXMgY29uc3Rcbn1cblxudHlwZSBDYWNoZSA9IE9iamVjdEdlbmVyaWM8YW55PlxuXG4vLyBDdXN0b20gZmV0Y2ggaG9vayB0aGF0IGNhY2hlcyB1cmwgcmVxdWVzdHNcbmV4cG9ydCBjb25zdCB1c2VGZXRjaEdvVERhdGEgPSAoXG4gIHF1ZXJ5OiBzdHJpbmcsXG4gIGRpc3BhdGNoQmluZGVkQWN0aW9uczogYW55LFxuICBnZXRSZXF1ZXN0OiAocD86IGFueSkgPT4gYW55XG4pID0+IHtcbiAgY29uc3QgcmVxdWVzdHNDYWNoZTogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxDYWNoZT4gPSB1c2VSZWYoe30pXG5cbiAgY29uc3Qge1xuICAgIGZldGNoRGlzcGF0Y2hBY3Rpb24sXG4gICAgc3VjY2Vzc0Rpc3BhdGNoQWN0aW9uLFxuICAgIGZhaWx1cmVEaXNwYXRjaEFjdGlvbixcbiAgfSA9IGRpc3BhdGNoQmluZGVkQWN0aW9uc1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2V0IGJvb2xlYW4gdmFyIHdoaWNoIHdpbGwgY2hlY2sgZm9yIHVubW91bnRpbmdcbiAgICAvLyBJZiB1bm1vdW50ZWQgYmVmb3JlIHNpZGUgcmVxdWVzdCBpcyBjb21wbGV0ZSwgd2UgY2FuY2VsIHRoZSBzdGF0ZSB1cGRhdGUgdG8gcHJldmVudFxuICAgIC8vIFJlYWN0IHN0YXRlIGNoYW5nZSBlcnJvcnNcbiAgICBpZiAoIXF1ZXJ5KSByZXR1cm5cblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGZldGNoRGlzcGF0Y2hBY3Rpb24oKVxuICAgICAgY29uc29sZS5sb2coJ2Rpc3BhdGNoZWQnKVxuICAgICAgaWYgKHJlcXVlc3RzQ2FjaGUuY3VycmVudFtxdWVyeV0pIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVlc3RzQ2FjaGUuY3VycmVudFtxdWVyeV1cbiAgICAgICAgc3VjY2Vzc0Rpc3BhdGNoQWN0aW9uKGRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0JywgcXVlcnkpXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXF1ZXN0KHF1ZXJ5KVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKVxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhXG5cbiAgICAgICAgICByZXF1ZXN0c0NhY2hlLmN1cnJlbnRbcXVlcnldID0gZGF0YVxuXG4gICAgICAgICAgc3VjY2Vzc0Rpc3BhdGNoQWN0aW9uKGRhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgZmFpbHVyZURpc3BhdGNoQWN0aW9uKGVycm9yLm1lc3NhZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaERhdGEoKVxuXG4gIH0sIFtxdWVyeV0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9