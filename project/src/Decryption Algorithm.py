Dictionary_1={'a':0,'b':1,'c':2,'d':3,'e':4,'f':5,'g':6,'h':7,'i':8,'j':9,'k':10,'l':11,'m':12,'n':13,'o':14,
              'p':15,'q':16,'r':17,'s':18,'t':19,'u':20,'v':21,'w':22,'x':23,'y':24,'z':25,'0':26,'1':27,'2':28,
              '3':29,'4':30,'5':31,'6':32,'7':33,'8':34,'9':35,'_':36,'@':37,' ':38,'$':39}
Dictionary_2={value : key for (key, value) in Dictionary_1.items()}

def Decryption(ct,key):

    try:
        length=len(ct) 
        Ans=""
        ct=[i for i in ct]
        key=[i for i in key]
        for i in range(length):
            ct[i]=(Dictionary_1[ct[i]])
            
        for i in range(length):
            key[i]=(Dictionary_1[key[i]])        

        for i in range(length):
            key[i]=(ct[i]-key[i])
            if key[i]<0:
                key[i]+=40
        
        for i in key:
            Ans+=str(Dictionary_2[i])
            
        print(Ans)
    except:
        print('Invalid')
    
           
ct=input()
key=input()
Decryption(ct,key)
