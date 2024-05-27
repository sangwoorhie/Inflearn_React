import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  { id: 1, message: "안녕하세요, 오늘 일정을 알려드립니다." },
  { id: 2, message: "점심식사 시간입니다." },
  { id: 3, message: "이제 곧 미팅이 시작됩니다." },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  //   매 1 milisecond마다 정해진 작업 수행
  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        // state를 업데이트하기 위해 setState함수 사용
        // ! 클래스 this.state;를 업데이트하기 위해선 반드시 setState를 사용해야 한다 !
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
