import Api from '@/services/Api';

export default {
  index(search) {
    return Api().get('microwaves');
  },
  show(microwaveId) {
    return Api().get('microwave/' + microwaveId);
  },
  post(microwave) {
    return Api().post('microwave', microwave);
  },
  put(microwave) {
    return Api().put('microwave/' + microwave.id, microwave); // แก้ไขตรงนี้
  },
  delete(microwave) {
    return Api().delete('microwave/' + microwave.id); // แก้ไขตรงนี้
  },
};
