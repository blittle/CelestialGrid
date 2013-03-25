import Telescope = module('Telescope');

export class AutoScope extends Telescope.Telescope {

    constructor(public name: string = "AutoScope Telescope") {
        super(name);
    }

    start(): AutoScope {

        this.bootup();

        super.start();

        return this;
    }

    private bootup() {
        //Do some work to start the Autoscope telescope
    }

}
