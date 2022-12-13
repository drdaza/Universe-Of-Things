import {defineStore} from 'pinia';

export const useHeroStore = defineStore ({
    id: 'Heroes',
    state: () => ({
        Heroes: [],
    }),
    actions: {
        async fetchHeroes(){
            await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
            .then (response => response.json)
            .then (data => {
                this.Heroes=data;
                console.log(this.Heroes);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(onFinally=>{})
        }
    }    
})