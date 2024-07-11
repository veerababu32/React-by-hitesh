function insertElement(reactEl, rootCon) {
    // const domEle = document.createElement(reactEl.type);
    // domEle.textContent = reactEl.children;

    // for (const prop in reactEl.props) {
    //     if (prop != 'children') {
    //         domEle.setAttribute(prop, reactEl.props[prop])
    //     }
    // }

    // rootCon.appendChild(domEle)

    if (!reactEl) return;
    const domEle = document.createElement(reactEl.type);
    domEle.innerHTML = reactEl.children;

    if (!reactEl.props) return;
    for (const prop in reactEl.props) {
        if (prop != "children") {
            domEle.setAttribute(prop, reactEl.props[prop]);
        }
    }

    rootCon.appendChild(domEle);
}

const reactEl = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click to Visit Google"
}

const rootCon = document.querySelector('#root');

insertElement(reactEl, rootCon);