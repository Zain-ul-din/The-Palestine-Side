import { useEffect } from "react";
import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";

export enum FIREBASE_ANALYTICS_EVENTS {
    // pages
    home_page= "home_page",
    resources = "resources",
    videos = "videos",
    martyrs = "martyrs",
    content = "dynamic_content"
}

export function reportFirebaseAnalytics (key: string, val: any)
{
   if (!analytics) return 
   logEvent(analytics, key, val);
}

export function useFirebaseAnalyticsReport (
    eventName: FIREBASE_ANALYTICS_EVENTS
)
{
   useEffect(()=> {
      reportFirebaseAnalytics(eventName.toString(), {});
   }, [])
}
