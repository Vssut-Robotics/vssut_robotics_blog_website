#include <Servo.h>

Servo servo1;
Servo servo2;
Servo servo3;
Servo servo4;
Servo servo5;
Servo servo6;

int joy1a = 0;
int joy1b = 1;
int joy2a = 2;
int joy2b = 3;
int joy3a = 4;
int joy3b = 5;

int servoVal;

void setup()
 {
  servo1.attach(3);
  servo2.attach(5);
  servo3.attach(6);
  servo4.attach(9);
  servo5.attach(10);
  servo6.attach(11);
  }

void loop()
{
  servoVal = analogRead(joy1a);
  servoVal = map(servoVal, 0, 1023, 0, 180);
  servo1.write(servoVal);

  servoVal = analogRead(joy1b);
  servoVal = map(servoVal, 0, 1023, 0, 180);
  servo2.write(servoVal);

  servoVal = analogRead(joy2a);
  servoVal = map(servoVal, 0, 1023, 0, 180);
  servo3.write(servoVal);

  servoVal = analogRead(joy2b);
  servoVal = map(servoVal, 0, 1023, 0, 180);
  servo4.write(servoVal);

  servoVal = analogRead(joy3a);
  servoVal = map(servoVal, 0, 1023, 0, 180);
  servo5.write(servoVal);

  servoVal = analogRead(joy3b);
  servoVal = map(servoVal, 0, 1023, 0, 180);
  servo6.write(servoVal);
  delay(20);
}
