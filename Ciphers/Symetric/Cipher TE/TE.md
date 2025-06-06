# Настраиваемое шифрование
Настраиваемое шифрование (tweakable encryption – TE) похоже на ба-
зовое, но в нем есть дополнительный настроечный параметр (tweak),
призванный эмулировать различные версии шифра (см. рис. 1.6). На-
строечный параметр может быть уникальным для каждого пользо-
вателя, это гарантирует, что пользовательский шифр не может быть
клонирован другими сторонами, использующими тот же продукт. Ос-
новное применение TE – шифрование диска. Однако TE не привязано
к какому-то одному приложению, а является низкоуровневым типом
шифрования и используется для построения других схем, например
режимов шифрования в процессе аутентификации.
При настраиваемом шифровании диска шифруется содержимое
запоминающих устройств, например жестких или SSD-дисков. (При-
менять здесь рандомизированное шифрование нельзя, потому что
при этом увеличился бы размер данных, что для файлов на носителе
недопустимо.) Чтобы шифрование было непредсказуемым, исполь-
зуется настроечный параметр, зависящий от положения шифруемых
данных, обычно номер сектора или индекс блока.