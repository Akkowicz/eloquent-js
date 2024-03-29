class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure('Klunk');
    }
}

function reliableMultiply(a, b) {
    while (true) {
        try {
            let result = primitiveMultiply(a, b);
            return result;
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure) {
                console.log(e.message);
            } else {
                throw e;
            }
        }
    }
}