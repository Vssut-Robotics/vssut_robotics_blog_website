
void loop() 
{
while (Serial.available ()>0)
{
  B = Serial.read();
  Serial.println(B);
}

if ( B == 'Forward')
{
digitalWrite(LMa,HIGH);
digitalWrite(LMb,LOW);
digitalWrite(RMa,HIGH);
digitalWrite(RMb,LOW);
}
else if( B == 'Backward' )
{
digitalWrite(LMa,LOW);
digitalWrite(LMb,HIGH);
digitalWrite(RMa,LOW);
digitalWrite(RMb,HIGH);
}
else if ( B == 'Left')
{
  digitalWrite(LMa,LOW);
digitalWrite(LMb,LOW);
digitalWrite(RMa,HIGH);
digitalWrite(RMb,LOW);
}

else if ( B == 'Right')
{
  digitalWrite(LMa,HIGH);
digitalWrite(LMb,LOW);
digitalWrite(RMa,LOW);
digitalWrite(RMb,LOW);
}
else if ( B == 'Stop')
{
  digitalWrite(LMa,LOW);
digitalWrite(LMb,LOW);
digitalWrite(RMa,LOW);
digitalWrite(RMb,LOW);
}
else if ( B == 'Sharp Left')
{
  digitalWrite(LMa,LOW);
digitalWrite(LMb,HIGH);
digitalWrite(RMa,HIGH);
digitalWrite(RMb,LOW);
}
else if ( B == 'Sharp Right')
{
  digitalWrite(LMa,HIGH);
digitalWrite(LMb,LOW);
digitalWrite(RMa,LOW);
digitalWrite(RMb,HIGH);
}

}
