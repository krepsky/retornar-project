// import Http from './Config';
import Axios from 'axios';

export default {
    getCEP: (cep) => {
        Axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    },
    changeTitle: (title) => {
        document.title = title;
    },
    makeAToast(self, message, type, position, duration) {
        self.$toast.open({
            message: message,
            type: type,
            position: position,
            duration: duration,
        });
    },
    
};