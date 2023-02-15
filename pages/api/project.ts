import { validateJWT } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

const ProjectHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await validateJWT(req.cookies[process.env.COOKIE_NAME]);
  console.log(user);
  console.log(req.body);

  await db.project.create({
    data: {
      name: req.body.name,
      ownerId: user.id,
    },
  });

  res.json({});
};

export default ProjectHandler;
