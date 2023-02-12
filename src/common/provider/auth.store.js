import {
    reactive
} from 'vue';

export const authStore = reactive({
    dbCredentials: JSON.parse(
        localStorage.getItem({})
    ),
    addDbCredentials(state){
    
        this.dbCredentials = state;
        localStorage.setItem(
            {}, 
            JSON.stringify(this.dbCredentials)
        )
    }
})