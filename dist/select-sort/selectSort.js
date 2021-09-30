function f(l){let e=[...l];for(let t=0;t<e.length-1;t++){let n=t;for(let r=t+1;r<e.length;r++)e[r]<e[n]&&(n=r);n!==t&&([e[t],e[n]]=[e[n],e[t]])}return e}export{f as default};
