export default defineNuxtPlugin(() => {
    return {
        provide: {
            locally: {
                getItem(item: any) {
                    if(process.client) {
                        return sessionStorage.getItem(item)
                    } else {
                        return undefined
                    }
                },

                setItem(item: string, value: any) {
                    if (process.client) {
                        return sessionStorage.setItem(item, value)
                    }
                }
            }
        }
    }
})