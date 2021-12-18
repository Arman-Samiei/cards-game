export class Timer {
    constructor() {
        this.startTime = new Date();
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.timeElapsed = {hours: 0, minutes: 0, seconds: 0}
    }

    startTiming = () => {
        this.timeElapsed = {hours: 0, minutes: 0, seconds: 0}
        this.startTime = new Date();
        this.interval = setInterval(this.updateTime, 1000)
    }

    updateTime = () => {
        const now = new Date();
        const timeElapsed = now - this.startTime;
        const seconds = Math.floor(timeElapsed / 1000) % 60;
        const minutes = Math.floor(timeElapsed / (1000 * 60)) % 60;
        const hours = Math.floor(timeElapsed / (1000 * 60 * 60)) % 24;
        this.timeElapsed = {hours, minutes, seconds};
    }

    getTimeElapsed = () => {
        return this.timeElapsed;
    }

    renderTime = (timeElapsed) => {
        return timeElapsed.hours.toString().padStart(2, '0') + " : " +
               timeElapsed.minutes.toString().padStart(2, '0') + " : " +
               timeElapsed.seconds.toString().padStart(2, '0');
    }

    finishTiming = () => {
        clearInterval(this.interval);
    }
}

