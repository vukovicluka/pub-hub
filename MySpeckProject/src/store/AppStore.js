import {
    observable,
    action,
    decorate,
} from 'mobx';

class AppStore {
    events = [];
    speakers = [];

    setEvent = event => {
        this.events.push(event);
    }

    setEvents = events => {
        this.events = events;
    }

    setSpeakers = speakers => {
        this.speakers = speakers;
    }
}

decorate(AppStore, {
    events: observable,
    speakers: observable,
    setEvent: action,
    setEvents: action,
    setSpeakers: action,
});

const appStore = new AppStore();

export default appStore;