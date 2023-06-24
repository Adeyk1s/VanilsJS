export class AbstractView {
    constructor(){
        this.app = document.getElementById('root');
    }

    setTitel(titel){
        document.title = titel;
    }

    render(){
        return;
    }
    destroy(){
        return;
    }
}