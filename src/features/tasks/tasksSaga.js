import { takeLatest, call, put, takeEvery, select, delay } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks, toggleIsLoading } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocaleStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield put(toggleIsLoading());
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
        yield put(toggleIsLoading());
    }
    catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocaleStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}