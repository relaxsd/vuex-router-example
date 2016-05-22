<template>
    <div>
        <h1>Vuex Counter App, with vue-router</h1>
        <p>
            <!-- use v-link directive for navigation. -->
            <a v-link="{ path: '/counters' }">Go to Counters</a>
            <a v-link="{ path: '/bar' }">Go to Bar</a>
        </p>
        <!-- route outlet -->
        <router-view></router-view>
    </div>
</template>

<script type="text/ecmascript-6">

    import store from './store';

    export default {
        name: 'App',
        store: store
    };

</script>
