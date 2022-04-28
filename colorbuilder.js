class ColorBuilder {
    constructor(name, width, height, callback) {
        this.callback = callback;
        this.name = name;
        this.width = width;
        this.height = height;
        this.colorsList = [];
        this.modelsList = [];
        this.container = document.createElement('table');
        this.container.id = this.name;
        this.tyle = "";



    }


    setModel = (modelString, style) => {
        this.style = style;
        var el = new DOMParser().parseFromString(modelString, 'text/html');
        var parsedModel = el.firstChild.lastChild.firstChild;
        this.colorsList.forEach(color => {
            let newModel = parsedModel.cloneNode(true);
            for (var key in style) {
                newModel.style[key] = style[key].replace(/\{\{COLOR\}\}/g, color.hex);
            }
            newModel.addEventListener("click", (e) => { this.callback(e, color) });
            newModel.innerHTML = newModel.innerHTML.replace(/\{\{COLOR\}\}/g, color.hex);
            newModel.classList.add("color-selector");
            this.modelsList.push({ model: newModel, color: color });
        });
        console.log(this.modelsList);
    }
    setColors = (colors) => {
        if (Array.isArray(colors)) {
            colors.forEach(color => {
                if (color.match(/#([a-f0-9]){6}/)) {
                    this.colorsList.push(new Color(color));
                } else {
                    throw new Error("Invalid color format");
                }
            });
        }
    }
    render = (root) => {
        for (let i = 0; i < this.height; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < this.width; j++) {
                let cell = document.createElement('td');

                cell.appendChild(this.modelsList[i * this.width + j].model);
                row.appendChild(cell);
            }
            this.container.appendChild(row);
        }

        root.appendChild(this.container);
        console.log(this.container)
    }

    removeStyles = (stylesToRemove) => {
        this.modelsList.forEach(el => {
            for (let i = 0; i < stylesToRemove.length; i++) {
                el.model.style[stylesToRemove[i]] = "";
            }
        })
    }
}

class Color {
    constructor(hex) {
        this.hex = hex;
    }
}
