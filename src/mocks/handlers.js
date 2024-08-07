import { rest } from "msw";

const baseURL = "https://albumtalk-api-9fb1bb849439.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 4,
        username: "test3",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 4,
        profile_image: "https://res.cloudinary.com/dymhyifmr/image/upload/v1/media/../media/images/default_profile2_q4xt5g"
        })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];