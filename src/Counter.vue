<template>
    <div class="counter">
        {{ currentCount }}
        <button @click="decrement(counterId)">Decrement</button>
        <button @click="increment(counterId)">Increment</button>
        <button @click="incrementIfOdd(counterId)">Increment If Odd</button>
    </div>
</template>

<script type="text/ecmascript-6">
    import { increment, decrement, incrementIfOdd } from './actions';

    export default {

        props: [
            'counterId'
        ],

        vuex: {

            // Cannot use 'this' in getters!
            getters: {
                counters: state => state.counters
            },

            actions: {
                increment,
                decrement,
                incrementIfOdd
            }
        },
        computed: {

            // Get the currentCount from the getter
            currentCount() {
                return this.counters[this.counterId]
            }

        }
    }
</script>

<style>
    .counter {
        border: 1px solid black;
        padding: 1rem 2rem;
        margin: 1rem;
        display: inline-block;
    }
</style>