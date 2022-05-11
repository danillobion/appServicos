export default {
    async getDados() {
        try {
                let response = await fetch("https://vaidescermoto.com/api/dados",
                {
                            headers:{
                                Acenpt: 'application/json',
                                'Content-Type': 'application/json'
                            },
                            method:'POST',
                        }
                );
                let json = await response.json();
                return json;
            }
        catch(e) {
        }
    }
}