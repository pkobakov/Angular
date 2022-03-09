abstract class Melon {
    public weight: number;
    public melonSort: string; 
    public elementIndex: number;
    protected element: string;

    constructor( weight: number, melonSort: string) {
       this.weight = weight;
       this.melonSort = melonSort;
       this.elementIndex = Number(weight)*melonSort.length ;
       this.element = '';
    }

    public getElementIndex(){
        return this.elementIndex;
    }

    public toString(): string {
        let  result: string = `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        return result;
    }

}

export class Watermelon extends Melon {


    constructor(weight: number, melonSort: string) {
        super(weight, melonSort)
        this.element = 'Water';
        
    }
}

export class FireMelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort)
        this.element = 'Fire';
    }
}

export class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort)
        this.element = 'Earth'; 
    }
}

export class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort)
        this.element = 'Air';
    }
}

export class Melolemonmelon extends Melon {
    private elements: string[];
    private index: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort)
        this.element = 'Water';
        this.elements = [ 'Fire', 'Earth', 'Air', 'Water'];
        this.index = 0;
    }

    public morph(index: number): void {
        this.element = this.elements[this.index];
        console.log(`This element is set to ${this.element}`);
    }
}

let watermelon: Watermelon = new Watermelon(12.5, 'Kingsize');
console.log(watermelon.toString());

let melolemonmelon: Melolemonmelon = new Melolemonmelon(10.5, 'Special');
melolemonmelon.morph(1);
console.log(melolemonmelon.toString());

