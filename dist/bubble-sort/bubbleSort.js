function u(n){let r=[...n],o=r.length;for(let e=o;e>=2;e--)for(let t=0;t<=e-1;t++)r[t]>r[t+1]&&([r[t],r[t+1]]=[r[t+1],r[t]]);return r}export{u as default};
