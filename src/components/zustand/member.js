import create from 'zustand';

const useMemberStore = create((set) => ({
    is_login: false,
    kakaoAuth: async (code) => {
        axios({
            method: "GET",
            url: `${KAKAO_REDIRECT_URL}?code=${authorization_code}`,
        }).then((res) =>
            res
        ).catch((err) =>
            console.log(err)
        );

        if (resData?.data.success) {
            createToken(
                resData.headers['authorization'].split(' ')[1],
                resData.headers['refresh-token']
            );
            set({ is_login: resData?.data.success});
            return resData.data.success;
        }
    }
}));

export default useMemberStore;