function u(t){let e=[...t];for(let r=1;r<e.length;r++){let n=r;for(;e[n-1]!==void 0&&e[n]<e[n-1];)[e[n-1],e[n]]=[e[n],e[n-1]],n--}return e}export{u as default};
