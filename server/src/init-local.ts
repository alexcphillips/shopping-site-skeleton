import seedDb from "./db/seed";

export default async () => {
    console.clear();
    await seedDb();
};
