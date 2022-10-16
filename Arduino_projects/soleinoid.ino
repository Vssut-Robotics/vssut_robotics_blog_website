const int RL_1=10;
const int RL_2=12;


void setup()   
 {   
    pinMode(RL_1,OUTPUT); // RELAY PIN 1
    pinMode(RL_2,OUTPUT); // RELAY PIN 2
    digitalWrite(RL_1,HIGH);
    digitalWrite(RL_2,HIGH); 
  } 
    
void loop()    
 {  
    while(1)
    { 
      digitalWrite(RL_1,LOW); // RELAY ON   
      delay(3000);   
      digitalWrite(RL_1,HIGH); // RELAY OFF   
      delay(3000);   

      digitalWrite(RL_2,HIGH); // RELAY ON   
      delay(3000);   
      digitalWrite(RL_2,LOW); // RELAY OFF   
      delay(3000); 
    }
  }
