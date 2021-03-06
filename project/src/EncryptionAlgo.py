Dictionary_1={'a':0,'b':1,'c':2,'d':3,'e':4,'f':5,'g':6,'h':7,'i':8,'j':9,'k':10,'l':11,'m':12,'n':13,'o':14,
              'p':15,'q':16,'r':17,'s':18,'t':19,'u':20,'v':21,'w':22,'x':23,'y':24,'z':25,'0':26,'1':27,'2':28,
              '3':29,'4':30,'5':31,'6':32,'7':33,'8':34,'9':35,'_':36,'@':37,' ':38,'$':39}
Dictionary_2={value : key for (key, value) in Dictionary_1.items()}

def Encryption(Password):
    
    try:
        keypass=Password.lower()
        Password=keypass
        length=len(Password)
        Ans=""
        Anskey=""
        pt=[]*length      #PlainText
        ct=[]*length      #CipherText
        key=[]*length     #Key
        for i in Password:
            pt.append(Dictionary_1[i])
            
        for i in range(0,length-1):
            key.append(pt[i]+pt[i+1])
            if key[i]>=40:
                key[i]-=40
            
        key.append(pt[-1])        
        for i in range(0,length):
            ct.append(pt[i]+key[i])
            if ct[i]>=40:
                ct[i]-=40
        
        for i in ct:
            Ans+=str(Dictionary_2[i])
            
        for i in key:
            Anskey+=str(Dictionary_2[i])
            
        print(Ans)
        print(Anskey)
    except:
        print('Invalid Entry')
    
           
Password=input()
Encryption(Password)
