#include <SoftwareSerial.h>
#include <avr/pgmspace.h>
#include <Servo.h> 
#include <Ultrasonic.h>


#define irLedPin 4          // IR Led on this pin
#define irSensorPin 5  
Servo myservo;  // create servo object to control a servo    
  int botella=0;
  Ultrasonic ultrasonic(49,48); // (Trig PIN,Echo PIN)

void setup() {
  
  pinMode(lockPIN,OUTPUT);
  Serial.begin(9600);
  myservo.attach(9);
 
}

void loop()
{ 
  
  myservo.write(180);                  // sets the servo position according to the scaled value 

  int distance = ultrasonic.Ranging(CM);
  if(distance < 8){
    delay(1000);
    myservo.write(0);
    Serial.println(1);
  }
  delay(1500);   
    
}
