Vue.component('my-tabs', {

    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                        <a :href="tab.href" @click="selectTab(tab)">{{ tab.name}}</a>
                    </li>
                </ul>
            </div>

            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>

    `,
    data() {
        return {
            tabs: []
        }
    },
    methods: {
        selectTab(currentTab) {
            this.tabs.forEach(tab => {

                tab.isActive = (tab.name == currentTab.name);

            });
        }
    },
    created() {
        this.tabs = this.$children;
    }

});


Vue.component('my-tab', {
    props: {
        name: {required: true},
        selected: {default: false}
    },

    template: `
        <div v-show="isActive">
            <slot></slot>
        </div>

    `,
    data() {
        return {
            isActive: false
        }
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g,'-');
        }
    },
    mounted() {
        isActive = this.selected;
    }

});


new Vue({
    el: '#root',
    data: {
    },
    computed: {

    },
    methods: {
  

    }
});