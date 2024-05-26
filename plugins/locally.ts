export default defineNuxtPlugin(() => {
    return {
        provide: {
            locally: {
                getItem(item: string) {
                    if(process.client) {
                        return sessionStorage.getItem(item)
                    } else {
                        return undefined
                    }
                },

                setItem(item: string, value: string) {
                    if (process.client) {
                        return sessionStorage.setItem(item, value)
                    }
                }
            }
        }
    }
})