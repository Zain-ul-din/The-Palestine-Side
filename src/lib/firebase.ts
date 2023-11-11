import { getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const app = getApp()

export const analytics = getAnalytics(app)
export const firestore = getFirestore(app)

