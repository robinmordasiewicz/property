FasdUAS 1.101.10   ��   ��    k             l      ��  ��    � �
Download URLs From List

Run this script and select  a plain text file that contains a list of URLs 
(each separated by a return). SiteSucker will then download the URLs 
in the list using the default settings.
     � 	 	� 
 D o w n l o a d   U R L s   F r o m   L i s t 
 
 R u n   t h i s   s c r i p t   a n d   s e l e c t     a   p l a i n   t e x t   f i l e   t h a t   c o n t a i n s   a   l i s t   o f   U R L s   
 ( e a c h   s e p a r a t e d   b y   a   r e t u r n ) .   S i t e S u c k e r   w i l l   t h e n   d o w n l o a d   t h e   U R L s   
 i n   t h e   l i s t   u s i n g   t h e   d e f a u l t   s e t t i n g s . 
   
  
 l     ��������  ��  ��        i         I     ������
�� .aevtoappnull  �   � ****��  ��    k            l     ��������  ��  ��        r         l     ����  I    ���� 
�� .sysostdfalis    ��� null��    ��  
�� 
prmp  m       �   f S e l e c t   a   p l a i n   t e x t   f i l e   c o n t a i n i n g   a   l i s t   o f   U R L s :  �� ��
�� 
ftyp  J        ��  m         � ! !  t x t��  ��  ��  ��    o      ���� 0 thefile theFile   " # " I   �� $��
�� .aevtodocnull  �    alis $ o    ���� 0 thefile theFile��   #  %�� % l   ��������  ��  ��  ��     & ' & l     ��������  ��  ��   '  ( ) ( i     * + * I     �� ,��
�� .aevtodocnull  �    alis , o      ���� 0 thefile theFile��   + k    > - -  . / . l     ��������  ��  ��   /  0 1 0 l     �� 2 3��   2    Read the file    3 � 4 4      R e a d   t h e   f i l e 1  5 6 5 Q     @ 7 8 9 7 k     : :  ; < ; r    
 = > = l    ?���� ? I   �� @��
�� .rdwropenshor       file @ o    ���� 0 thefile theFile��  ��  ��   > o      ���� 0 fref fRef <  A B A r     C D C I   �� E��
�� .rdwrread****        **** E o    ���� 0 thefile theFile��   D o      ���� 0 url_text   B  F�� F I   �� G��
�� .rdwrclosnull���     **** G o    ���� 0 fref fRef��  ��   8 R      �� H��
�� .ascrerr ****      � **** H o      ���� 0 	errstring 	errString��   9 k     @ I I  J K J r     # L M L m     ! N N � O O , A n   e r r o r   h a s   o c c u r r e d . M o      ���� 0 thealerttext theAlertText K  P Q P r   $ - R S R b   $ + T U T b   $ ) V W V b   $ ' X Y X m   $ % Z Z � [ [ 8 T h e r e   w a s   a n   e r r o r   r e a d i n g   " Y o   % &���� 0 thefile theFile W m   ' ( \ \ � ] ]  " :   U o   ) *���� 0 	errstring 	errString S o      ���� "0 thealertmessage theAlertMessage Q  ^ _ ^ I  . =�� ` a
�� .sysodisAaleR        TEXT ` o   . /���� 0 thealerttext theAlertText a �� b c
�� 
mesS b o   0 1���� "0 thealertmessage theAlertMessage c �� d e
�� 
as A d m   2 3��
�� EAlTcriT e �� f g
�� 
btns f J   4 7 h h  i�� i m   4 5 j j � k k  O K��   g �� l��
�� 
dflt l m   8 9 m m � n n  O K��   _  o�� o L   > @����  ��   6  p q p l  A A��������  ��  ��   q  r s r l  A A�� t u��   t - '  Create a list that SiteSucker can use    u � v v N     C r e a t e   a   l i s t   t h a t   S i t e S u c k e r   c a n   u s e s  w x w r   A L y z y m   A D { { � | |  
 z n      } ~ } 1   G K��
�� 
txdl ~ 1   D G��
�� 
ascr x   �  r   M T � � � n   M R � � � 2   N R��
�� 
citm � o   M N���� 0 url_text   � o      ���� 0 url_list   �  � � � r   U ` � � � m   U X � � � � �   � n      � � � 1   [ _��
�� 
txdl � 1   X [��
�� 
ascr �  � � � l  a a��������  ��  ��   �  � � � I  a |�� � �
�� .sysodlogaskr        TEXT � m   a d � � � � � R D o w n l o a d   w i t h   q u e u i n g   o r   w i t h o u t   q u e u i n g ? � �� � �
�� 
btns � l 	 e p ����� � J   e p � �  � � � m   e h � � � � �  W i t h   Q u e u i n g �  � � � m   h k � � � � �  W i t h o u t   Q u e u i n g �  ��� � m   k n � � � � �  S t o p��  ��  ��   � �� � �
�� 
dflt � m   q r����  � �� ���
�� 
disp � m   u v���� ��   �  � � � r   } � � � � l  } � ����� � n   } � � � � 1   � ���
�� 
bhit � l  } � ����� � 1   } ���
�� 
rslt��  ��  ��  ��   � l      ����� � o      ���� 0 user_choice  ��  ��   �  � � � Z   � � � ����� � =  � � � � � l  � � ����� � o   � ����� 0 user_choice  ��  ��   � m   � � � � � � �  S t o p � L   � �����  ��  ��   �  � � � l  � ���������  ��  ��   �  � � � l  � ��� � ���   � 9 3  Tell SiteSucker to download the sites in the list    � � � � f     T e l l   S i t e S u c k e r   t o   d o w n l o a d   t h e   s i t e s   i n   t h e   l i s t �  � � � O   �< � � � k   �; � �  � � � I  � �������
�� .miscactvnull��� ��� null��  ��   �  � � � l  � ���������  ��  ��   �  � � � l  � ��� � ���   �   Create a new document    � � � � ,   C r e a t e   a   n e w   d o c u m e n t �  � � � r   � � � � � I  � ����� �
�� .corecrel****      � null��   � �� ���
�� 
kocl � m   � ���
�� 
docu��   � o      ���� 0 newdocument newDocument �  � � � l  � ��������  ��  �   �  ��~ � Y   �; ��} � ��| � k   �6 � �  � � � r   � � � � � n   � � � � � 4   � ��{ �
�{ 
cobj � o   � ��z�z 0 i   � o   � ��y�y 0 url_list   � o      �x�x 0 	this_item   �  ��w � Z   �6 � � ��v � G   � � � � � l  � � ��u�t � C   � � � � � o   � ��s�s 0 	this_item   � m   � � � � � � �  h t t p : / /�u  �t   � l  � � ��r�q � C   � � � � � o   � ��p�p 0 	this_item   � m   � � � � � � �  h t t p s : / /�r  �q   � Z   � � � ��o � � =  � � � � � l  � � ��n�m � o   � ��l�l 0 user_choice  �n  �m   � m   � � � � � � �  W i t h   Q u e u i n g � I  � ��k � �
�k .SucKDOWNnull��� ��� ctxt � o   � ��j�j 0 	this_item   � �i ��h
�i 
QUEU � m   � ��g
�g boovtrue�h  �o   � I  � ��f � �
�f .SucKDOWNnull��� ��� ctxt � o   � ��e�e 0 	this_item   � �d ��c
�d 
QUEU � m   � ��b
�b boovfals�c   �    ?   n    1  �a
�a 
leng o   �`�` 0 	this_item   m  �_�_   �^ k  
2 	 r  


 m  
 � , A n   e r r o r   h a s   o c c u r r e d . o      �]�] 0 thealerttext theAlertText	  r   b   b   m   �  T h e   U R L   " o  �\�\ 0 	this_item   m   � \ "   d o e s   n o t   b e g i n   w i t h   " h t t p : / / "   o r   " h t t p s : / / " . o      �[�[ "0 thealertmessage theAlertMessage  I /�Z
�Z .sysodisAaleR        TEXT o  �Y�Y 0 thealerttext theAlertText �X
�X 
mesS o  �W�W "0 thealertmessage theAlertMessage �V !
�V 
as A  m   !�U
�U EAlTcriT! �T"#
�T 
btns" J  "'$$ %�S% m  "%&& �''  O K�S  # �R(�Q
�R 
dflt( m  (+)) �**  O K�Q   +�P+ L  02�O�O  �P  �^  �v  �w  �} 0 i   � m   � ��N�N  � n   � �,-, m   � ��M
�M 
nmbr- n  � �./. 2  � ��L
�L 
cobj/ o   � ��K�K 0 url_list  �|  �~   � m   � �00�                                                                                  SucK  alis    2  Macintosh HD                   BD ����SiteSucker.app                                                 ����            ����  
 cu             Applications  /:Applications:SiteSucker.app/    S i t e S u c k e r . a p p    M a c i n t o s h   H D  Applications/SiteSucker.app   / ��   � 1�J1 l ==�I�H�G�I  �H  �G  �J   ) 2�F2 l     �E�D�C�E  �D  �C  �F       �B3456�A�B  3 �@�?�>�=
�@ .aevtoappnull  �   � ****
�? .aevtodocnull  �    alis�> 0 thefile theFile�=  4 �< �;�:78�9
�< .aevtoappnull  �   � ****�;  �:  7  8 �8 �7  �6�5�4�3
�8 
prmp
�7 
ftyp�6 
�5 .sysostdfalis    ��� null�4 0 thefile theFile
�3 .aevtodocnull  �    alis�9 *����kv� E�O�j OP5 �2 +�1�09:�/
�2 .aevtodocnull  �    alis�1 0 thefile theFile�0  9 �.�-�,�+�*�)�(�'�&�%�$�. 0 thefile theFile�- 0 fref fRef�, 0 url_text  �+ 0 	errstring 	errString�* 0 thealerttext theAlertText�) "0 thealertmessage theAlertMessage�( 0 url_list  �' 0 user_choice  �& 0 newdocument newDocument�% 0 i  �$ 0 	this_item  : 3�#�"�!� � N Z \���� j� m�� {��� � � � � ������ �0������
 � ��	 ����&)
�# .rdwropenshor       file
�" .rdwrread****        ****
�! .rdwrclosnull���     ****�  0 	errstring 	errString�  
� 
mesS
� 
as A
� EAlTcriT
� 
btns
� 
dflt� 
� .sysodisAaleR        TEXT
� 
ascr
� 
txdl
� 
citm
� 
disp� 
� .sysodlogaskr        TEXT
� 
rslt
� 
bhit
� .miscactvnull��� ��� null
� 
kocl
� 
docu
� .corecrel****      � null
� 
cobj
�
 
nmbr
�	 
bool
� 
QUEU
� .SucKDOWNnull��� ��� ctxt
� 
leng�/? �j  E�O�j E�O�j W 'X  �E�O�%�%�%E�O������kv��� OhOa _ a ,FO�a -E�Oa _ a ,FOa �a a a mv�ma ka  O_ a ,E�O�a   hY hOa   �*j !O*a "a #l $E�O �k�a %-a &,Ekh 	�a %�/E�O�a '
 �a (a )& "�a *  �a +el ,Y �a +fl ,Y 8�a -,j -a .E�Oa /�%a 0%E�O�����a 1kv�a 2� OhY h[OY��UOP6`alis    \   Macintosh HD                   BD ����sitemap-images.txt                                             ����            ����  J cu            3/:Users:mordasiewicz:GIT:sitemap:sitemap-images.txt   &  s i t e m a p - i m a g e s . t x t    M a c i n t o s h   H D  1Users/mordasiewicz/GIT/sitemap/sitemap-images.txt   /    ��  �A  ascr  ��ޭ