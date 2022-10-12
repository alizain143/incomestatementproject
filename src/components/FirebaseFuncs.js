import { onSnapshot } from "firebase/firestore";

export const snap = (collection, stateFunc) => {
  onSnapshot(collection, (data) => {
    stateFunc(
      data.docs.map((e) => {
        return { ...e.data(), id: e.id };
      })
    );
  });
};
