
 function customReact (reactElement , mainContainer){


    // NOT EFFICIENT CODE

        // const element = document.createElement(reactElement.type);
        // element.innerHTML = reactElement.children;
        // element.setAttribute('target', reactElement.props.target);
        // element.setAttribute('href', reactElement.props.href)

        // mainContainer.appendChild(element)


    // EFFICIENT CODE

        const element = document.createElement(reactElement.type);
        element.innerHTML = reactElement.children;
        for (const prop in reactElement.props) {
            if(prop == 'children')continue;
            element.setAttribute(prop , reactElement.props[prop])
        }

        mainContainer.appendChild(element);

}

const reactElement ={
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'click to visit google'
}

const mainContainer = document.querySelector('#root')

customReact(reactElement,mainContainer)

 