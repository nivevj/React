function customRender(element, container){
    /*
    const domelement = document.createElement(element.type)
    domelement.innerHTML = element.children
    domelement.setAttribute('href',element.props.href)
    domelement.setAttribute('target',element.props.target)
    container.appendChild(domelement)
    */
    const domelement = document.createElement(element.type)
    domelement.innerHTML = element.children
    for(const prop in element.props){
        if(prop === 'children') continue
        domelement.setAttribute(prop,element.props[prop])
    }
    container.appendChild(domelement)
}

const element = {
    type : 'a',
    props : {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const maincontainer = document.querySelector('#root')

customRender(element,maincontainer)