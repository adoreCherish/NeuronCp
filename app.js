var synaptic = require('synaptic'); // this line is not needed in the browser
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;

function Perceptron(input, hidden, output) {
    // create the layers
    var inputLayer = new Layer(input);
    var hiddenLayer = new Layer(hidden);
    var outputLayer = new Layer(output);

    // connect the layers
    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    // set the layers
    this.set({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });
}

// extend the prototype chain
Perceptron.prototype = new Network();
Perceptron.prototype.constructor = Perceptron;

var trainingSet = [{
    input: [0, 0, 1, 0.12, 0, 0, 0, 0, 1, 1],
    output: [1]
}, {
    input: [0, 1, 0, 0.045, 0, 0, 1, 1, 0, 0],
    output: [0]
}, {
    input: [1, 0, 0, 0.42, 1, 1, 0, 0, 0, 0],
    output: [1]
}]
var traniningSetDemo = [{
    input: [0, 0, 1, 0.12, 0, 0, 0, 0, 1, 1],
    output: [1]

}]

var trainingOptions = {
    rate: .1,
    iterations: 20000,
    error: .005,
}

var myPerceptron = new Perceptron(3, 6, 1);

var myTrainer = new Trainer(myPerceptron);
myTrainer.train(trainingSet);
var result = myTrainer.test(traniningSetDemo);
console.log(result);