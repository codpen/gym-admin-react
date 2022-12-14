import http from "../../libraries/axios/axios";
import BASE_URL from "../urls/urls";

const getAllMember = () => {
    return http.get(`${BASE_URL}/api/member`)
}
const getAllMemberByDate = () => {
    return http.get(`${BASE_URL}/api/memberbydate`)
}

const getAllMemberById = (id) => {
    return http.get(`${BASE_URL}/api/member/${id}`)
}

const createMember = data => {
    return http.post(`${BASE_URL}/api/member`, data);
};

const editMember = (id, data) => {
    return http.put(`${BASE_URL}/api/member/${id}`, data);
};

const removeMember = id => {
    return http.delete(`${BASE_URL}/api/member/${id}`);
};
const getCountMember = () => {
    return http.get(`${BASE_URL}/api/count/member`)
}

const searchMember = (name) => {
    return http.get(`${BASE_URL}/api/search/member/${name}`)
}

const getTotalMember = () => {
    return http.get(`${BASE_URL}/api/count/member/all`)
}

const getTodayMember = () => {
    return http.get(`${BASE_URL}/api/count/member/today`)
}

const getAllMemberNumberByDate = () => {
    return http.get(`${BASE_URL}/api/count/member/memberbydate`)
}

export default {
    getAllMember,
    createMember,
    editMember,
    removeMember,
    getAllMemberByDate,
    getCountMember,
    getAllMemberById,
    searchMember,
    getTotalMember,
    getTodayMember,
    getAllMemberNumberByDate
};
