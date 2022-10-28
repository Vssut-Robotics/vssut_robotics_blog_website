#include <Wire.h>
volatile long temp1,temp2, counter = 0, countery = 0; //This variable will increase or decrease depending on the rotation of encoder
float  distancex=0,distancey=0;  

void setup() {
  Wire.begin(8);                // join i2c bus with address #8
  Wire.onRequest(requestEvent); // register event
  Serial.begin (9600);
  pinMode(2, INPUT_PULLUP); // internal pullup input pin 2 
  
  pinMode(3, INPUT_PULLUP);
   //Setting up interrupt
  //A rising pulse from encodenren activated ai0(). AttachInterrupt 0 is DigitalPin nr 2 on moust Arduino.
 
  attachInterrupt(digitalPinToInterrupt(2), ai0x, RISING);
   
  //B rising pulse from encodenren activated ai1(). AttachInterrupt 1 is DigitalPin nr 3 on moust Arduino.
  attachInterrupt(digitalPinToInterrupt(3), ai1x, RISING);
  }
   
  void loop() {
  // Send the value of counter
  if( counter != temp1 ){
  
  temp1 = counter;
  }
  else
  {
    distancex=counter;
  }
  
  Serial.println("distancex");
  Serial.println (distancex);
  delay(100);
  }
   
  void ai0x() {
  // ai0 is activated if DigitalPin nr 2 is going from LOW to HIGH
  // Check pin 3 to determine the direction
  if(digitalRead(19)==LOW) {
  counter++;
  }else{
  counter--;
  }
  }
   
  void ai1x() {
  // ai0 is activated if DigitalPin nr 3 is going from LOW to HIGH
  // Check with pin 2 to determine the direction
  if(digitalRead(18)==LOW) {
  counter--;
  }else{
  counter++;
  }
  }
  void requestEvent() {
  Wire.write((byte)distancex); // respond with message of 6 bytes\
  // as expected by master
}
  
